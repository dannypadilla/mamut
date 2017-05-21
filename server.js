var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("mamut", ["mamut"] ); // put database name here
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public") );
app.use(bodyParser.json() );

app.get("/", function(req, res) { // needs more setup
    console.log("Received GET request");
});


app.listen(3000);
console.log("Server running on port 3000");
