// Dependencies
var path = require("path");
var fs = require("fs");

// Routing
module.exports = function(app){
	app.get("/flashcards", function(req, res){
		res.sendFile(path.join(__dirname), "/../public/flashcard.html");
	});
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "/../public/flashcard.html"));
	});
};