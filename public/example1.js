var Comp = React.createClass({
	getInitialState(){
		return {val : this.props.val};
	},

	show(){
		this.state.val = parseInt(this.state.val) + 1;
		this.setState(this.state);
	},

	render(){
		return(
			<button onClick={this.show} >Hello {this.state.val}</button>
		);
	}
});

ReactDOM.render(
	<div>
		< Comp val="0" />
	</div>	
	,document.getElementById('root')
);

