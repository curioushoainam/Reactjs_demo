var list;
var Note = React.createClass({
	delete(){
		$.post("/delNote",{id: this.props.id},function(data){
			list.setState({arr: data});
		});
	},

	render: function(){
		return(
			<div className="div-note" >
				<p>{this.props.children}</p>
				<button onClick={this.delete}>Delete</button>
			</div>
		);
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