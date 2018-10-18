var Note = React.createClass({
	render: function(){
		return (
			<div>
				<img src={"images/" + this.props.src}/>
				<h3>{this.props.children}</h3>

			</div>	
			
		);
	}
});

var List = React.createClass({
	getInitialState(){
		return {array: [
					{img: "1.jpg", note: "Guten Morgen"},
					{img: "2.jpg", note: "Guten Tag"},
					{img: "3.jpg", note: "Guten Abend"},
					{img: "4.jpg", note: "Gute Natch"}
				]};
	},
	
	addMore(){
		this.state.array.push(
			{img: "7.jpg", note: "Schlaf Schoon"},
			{img: "8.jpg", note: "Auf Wiedersehen"},
			{img: "9.jpg", note: "Tschuuss"}			
		);
		this.setState(this.state);
	},

	render: function(){
		return (
			<div>
				<button onClick={this.addMore} >Add more</button>
				<br/><br/>
				{
					this.state.array.map(function(item, index){
						return <Note key={index} src={item.img} >{item.note}</Note>
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