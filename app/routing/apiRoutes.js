// Grab data from clozeData.js and basicData.js
var basicData = require("../data/basicData");
var clozeData = require("../data/clozeData");

// Routes
module.exports = function(app){
	// Routes to view data
	app.get("/api/basic", function(req, res){
		res.json(basicData);
	});
	
	app.get("/api/cloze", function(req, res){
		res.json(clozeData);
	});

	// Routes to post data
	app.post("/api/basic", function(req, res){
		var newBasic = req.body;
		basicData.push(newBasic);
		res.json(basicData);
	});

	app.post("/api/cloze", function(req, res){
		var newCloze = req.body;
		// Add "partial" element to new cloze card object
		var found = newCloze.fullText.search(newCloze.cloze);
		if (found === -1){
			newCloze.partial = "Error: '" + newCloze.cloze + "' is not in '" + newCloze.fullText +"'";
		}
		else{
			newCloze.partial = newCloze.fullText.split(newCloze.cloze).join("...");
		}

		clozeData.push(newCloze);
		res.json(clozeData);
	});
};