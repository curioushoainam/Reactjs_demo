var Image = React.createClass({
	getInitialState(){
		return {img: 1}
	},

	changeImage(){
		this.state.img = (this.state.img % 12) + 1;
		this.setState(this.state);
	},

	render: function(){
		return(
			<img src={"images/" +this.state.img+".jpg"} alt="angry-bird" />
		);
	},

	componentDidMount(){
		setInterval(this.changeImage, 1500);
	}
});


ReactDOM.render(
	< Image />,
	document.getElementById('root')
);