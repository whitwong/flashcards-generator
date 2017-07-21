// Dependencies
var path = require("path");
var fs = require("fs");

// Routing
module.exports = function(app){
	// app.get("/flashcards", function(req, res){
	// 	fs.readFile(__dirname + "/../../assets/css/styles.css", function(err, data){
	// 		res.writeHead(200, { "Content-Type": "text/css" });
	// 	});
	// })
	app.get("/flashcards", function(req, res){
		res.sendFile(path.join(__dirname), "/../public/flashcard.html");
	});
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "/../public/flashcard.html"));
	});
};