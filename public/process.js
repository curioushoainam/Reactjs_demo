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

	render: function(){
		return (
			<div>
				<h2> I am a component</h2>
				<h1 className="mauxanh" > {this.props.id} - {this.props.val} </h1>
				<p>{this.props.children}</p>
				<button onClick={this.msg} >Alert</button>
				<br/><br/>
				<button onClick={()=>{ var str = this.props.id +'-'+ this.props.val; globalFunc(str) } } >Global function</button>
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

ReactDOM.render( 
	<div>
		< Content1 id="001" val="1988"> Younger </Content1>
		< Content1 id="002" val="1982"> Older </Content1>
	</div>

	,document.getElementById('root1')
);

