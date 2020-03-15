const express = require("express");
const app = express();

app.use(express.static("public/demosite/"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/list", function(req, res) {
    res.sendFile(__dirname + "/textdata.txt");
});

app.get("/add", function(req, res) {
    res.send("Lets try to add some data to a file");
});

app.get("*", function(req, res) {
    res.send("Cant find the requested page", 404);
});





app.listen(8081, function() {
    console.log("8081 is the magic port");
});