const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public/demosite/"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/list", function(req, res) {
    let data = require("./exampledata2.json");

    let results = '<table border="1">';

    for (let i = 0; i < data.length; i++) {
        results += '<tr><td>' +
            data[i].Name +
            '</td><td>' +
            data[i].Email +
            '</td><td>' +
            data[i].Company +
            '</td><td>' +
            data[i].Date +
            '</td></tr>';
    }

    res.send(results);

});

app.get("/add", function(req, res) {
    let data = require('./exampledata2.json');

    data.push({
        "Name": "Lari Vesterinen",
        "Company": "Microsoft",
        "Email": "lari@email.com",
        "Date": "15/03/2020 \r\n"
    });

    let jsonString = JSON.stringify(data);

    fs.writeFile("exampledata2.json", jsonString, (err) => {
        if (err) throw err;
        console.log("It\'s saved!");
    });

    res.send("Saved the data to a file. Browse to the /details to see the contents of the file");
});

app.get("*", function(req, res) {
    res.send("Cant find the requested page", 404);
});





app.listen(8081, function() {
    console.log("8081 is the magic port");
});