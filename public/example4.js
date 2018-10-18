var Note = React.createClass({
	render: function(){
		return (
			<h3>{this.props.children}</h3>
		);
	}
});

var List = React.createClass({
	getInitialState(){
		return {array: ["Guten Morgen","Guten Tag","Guten Abend","Gute Natch"]};
	},
	
	addMore(){
		this.state.array.push("Schlaf Schoon","Auf Wiedersehen","Tschuuss!");
		this.setState(this.state);
	},

	render: function(){
		return (
			<div>
				<button onClick={this.addMore} >Add more</button>
				{
					this.state.array.map(function(greeting, index){
						return <Note key={index} >{greeting}</Note>
					})
				}						
			</div>	
		);
	}
});

ReactDOM.render(
	<List />
	,document.getElementById('root')
);