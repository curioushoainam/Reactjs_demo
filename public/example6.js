var list;
var Note = React.createClass({
	delete(){
		$.post("/delNote",{id: this.props.id},function(data){
			list.setState({arr: data});
		});
	},

	edit(){
		this.setState({onEdit: true});
	},

	cancel(){
		this.setState({onEdit: false});
	},

	save(){
		var note = this;
		$.post("/update",{id: this.props.id, note: this.refs.txt.value},function(data){
			list.setState({arr: data});		
			note.setState({onEdit: false});	
		});		
	},

	getInitialState(){
		return {onEdit: false};
	},

	render: function(){
		if(this.state.onEdit){
			return(
				<div className="div-note" >
					<p><input defaultValue={this.props.children} ref='txt' placeholder="Enter new note!"/></p>
					<button onClick={this.cancel}>Cancel</button>
					<button onClick={this.save}>Save</button>
				</div>
			);
		} else {
			return(
				<div className="div-note" >
					<p>{this.props.children}</p>
					<button onClick={this.delete}>Delete</button>
					<button onClick={this.edit}>Edit</button>
				</div>
			);
		}
		
	}
});

var List = React.createClass({
	getInitialState(){
		list = this;
		return {arr:[]};
	},
	
	add(){
		ReactDOM.render( <InputDiv />, document.getElementById("addDiv") );
	},

	render: function(){
		return(
			<div className="div-list">
				<div id="addDiv" ></div>
				<div> <button onClick={this.add}>Add</button> </div>
			{
				this.state.arr.map(function(note, index){
					return <Note key={index} id={index} >{note}</Note>
				})
			}
			</div>
		);
	},

	componentDidMount(){
		var that = this;
		$.post("/getNote", function(data){
			that.setState({arr : data});
		});
	}
});

var InputDiv = React.createClass({
	send(){
		$.post("addNote",{note: this.refs.txt.value},function(data){
			list.setState({arr: data});
		});
		ReactDOM.unmountComponentAtNode(document.getElementById('addDiv'));
	},
	render: function(){
		return(
			<div>				
				<input type="text" ref="txt" placeholder="Enter your note!"/>
				<button onClick={this.send}>Send</button>				
			</div>
		);
	}
});


ReactDOM.render(
	<List />
	,document.getElementById('root')
);