// Dependencies, Libraries, Port
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
app.use("/public", express.static(__dirname + "/assets"));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server
app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});