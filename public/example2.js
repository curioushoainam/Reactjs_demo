var Album = React.createClass({
	getInitialState(){
		return {img: 1};
	},

	prev(){
		this.state.img = this.state.img==1? 12 : this.state.img - 1;
		this.setState(this.state);
	},

	next(){
		this.state.img = this.state.img==12? 1 : this.state.img + 1;
		this.setState(this.state);
	},

	render(){
		return(
			<div className="div-album">
				<img src={"images/" + this.state.img + ".jpg"} alt="angry-bird" />
				<br/>
				<button onClick={this.prev}>Previous</button>
				<button onClick={this.next}>Next</button>
			</div>
		)
	}	
});

ReactDOM.render(
	<Album />
	,document.getElementById('root')
);