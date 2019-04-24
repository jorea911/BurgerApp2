var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-Parser");

var app = express();
var port= process.env.port || 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.engine("Handlebars",expressHandlebars({defaultlayout:"main"}));
app.set("view engine", "Handlebars");


var routes = require("./controllers/Burger_App.js");
app.use(routes);


app.listen(port, function() {
    console.log("Server Listening on: http://localhost:"+ port);

});



