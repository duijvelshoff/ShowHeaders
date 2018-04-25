var express = require("express");
var app = express();
var port = process.env.PORT || 1337;

app.set("view engine", "ejs");

app.get('/', function (req, res){
    res.render("index", {headers: req.headers});
    console.log(req.headers);
});

app.listen(port, () => console.log("Server running at http://localhost:%d", port));