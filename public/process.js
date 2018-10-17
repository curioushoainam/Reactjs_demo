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

var Content1 = React.createClass({
	render: function(){
		return (
			<div>
				<h2> I am a component</h2>
				<h1 className="mauxanh" > I am the most element in the React </h1>
			</div>
		);
	}
});

ReactDOM.render( 
	<div>
		< Content1 />
		< Content1 />
	</div>

	,document.getElementById('root1')
);