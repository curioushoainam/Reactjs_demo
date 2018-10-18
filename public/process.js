ReactDOM.render( 
	<div>
		<h1> I am inside the bable </h1> 
		<h2 className="mauxanh"> Hallo leuter, Guten Natch </h2>	
	</div>	
	,document.getElementById('root')
);


/*
* Component 	
* Chu cai dau tien phai viet hoa
* Component co nhieu trang thai, trong do trang thai RENDER la quan trong nhat
* Cac trang thai cach nhau bang dau phay ','
*/	

function globalFunc(str){
	alert(str);
}

var Content1 = React.createClass({
	msg: function(){
		alert('Woher kommst du');
		alert(this.props.children);
	},
	
	addVal(){		
		this.state.total = parseInt(this.state.total) + 1;
		this.setState(this.state);
	},

	getInitialState(){
		return {total : this.props.total};
	},

	render: function(){
		return (
			<div>
				<h2> I am a component</h2>
				<h1 className="mauxanh" > {this.props.id} - {this.props.val} </h1>
				<p>{this.props.children}</p>
				<button onClick={this.msg} >Alert</button>
				<br/><br/>
				<button onClick={()=>{ var str = this.props.id +'-'+ this.props.val; globalFunc(str) } } >Global function</button>
				<br/><br/>
				<div>Total is : {this.state.total}</div>
				<button onClick={this.addVal} > ADD </button>
				< SubContent1 />
			</div>
		);
	}
});

var SubContent1 = React.createClass({
	render: function(){
		return(
			<div>
				<h4>I am the SubContent1</h4>
				< SubSubContent1 />
			</div>
		);
	}
});

var SubSubContent1 = React.createClass({
	render: function(){
		return(
			<div>
				<h6>I am the Sub-SubContent1</h6>
			</div>
		);
	}
});

var InputTags = React.createClass({
	show(){
		var text = this.refs.inp.value;
		alert(text);
		var option = this.refs.sl.value;
		alert(option);
	},

	render: function(){
		return (
			<div>
				<input type="text" ref="inp" /><br/>		
				<select ref="sl">
					<option value="AAA">3A</option>
					<option value="BBB">3B</option>
					<option value="CCC">3C</option>
				</select>
				<br/><br/>
				<button onClick={this.show}>Display</button>
			</div>
		);
	}
});


ReactDOM.render( 
	<div>
		< InputTags />
		< Content1 id="001" val="1988" total="6" > Younger </Content1>
		< Content1 id="002" val="1982" total="0" > Older </Content1>
	</div>

	,document.getElementById('root1')
);

