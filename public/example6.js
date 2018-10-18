var list;
var Note = React.createClass({
	render: function(){
		return(
			<div className="div-note" >
				{this.props.children}
			</div>
		);
	}
});

var List = React.createClass({
	getInitialState(){
		list = this;
		return {arr: ["Guten Morgen","Guten Tag","Guten Abend","Gute Natch"]};
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
					return <Note key={index} >{note}</Note>
				})
			}
			</div>
		);
	}
});

var InputDiv = React.createClass({
	send(){
		list.state.arr.push(this.refs.txt.value);
		list.setState(list.state);
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