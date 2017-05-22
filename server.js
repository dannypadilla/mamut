var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("portfolio", ["portfolio"] ); // put database name here
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public") );
app.use(bodyParser.json() );

app.get("/portfolio", function(req, res) {
    console.log("Received GET request");
    db.portfolio.find( function(err, docs) {
	console.log(docs);
	res.json(docs);
    });
});

app.get("/portfolio/:id", function(res, req) {
    var id = req.params.id;
    console.log(id);
    db.portfolio.findOne({_id: mongojs.ObjectId(id) }, function(err, doc) {
	res.json(doc);
    });
});

app.listen(3000);
console.log("Server running on port 3000");
