var express =  require("express");
var app = express();
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
app.use(express.static("public")); 	// all upload from cust will store into the public folder
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

database = ["Guten Morgen","Guten Tag","Guten Abend","Gute Natch"];

app.get("/", function(req, res){
	res.render("home");
});

app.post("/getNote", function(req, res){
	res.send(database);
});

app.post("/addNote", parser, function(req, res){
	var newNote = req.body.note;
	database.push(newNote);
	res.send(database);
})