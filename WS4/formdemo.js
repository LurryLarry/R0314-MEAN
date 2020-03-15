const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public/demosite/"));

app.get('/adduser', function(req, res) {
    res.sendFile(__dirname + '/public/demosite/adduser.html');
})

app.get('/details', function(req, res) {
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


app.post('/adduser', function(req, res) {

    let data = require('./exampledata2.json');
    data.push({
        "Name": req.body.name,
        "Email": req.body.email,
        "Date": new Date(),
        "Company": req.body.company
    });;

    let jsonString = JSON.stringify(data);

    fs.writeFile("exampledata2.json", jsonString, (err) => {
        if (err) throw err;
        console.log("It\'s saved!");
    });

    res.send("Saved the data to a file. Browse to the /details to see the contents of the file");
});

app.listen(8081, function() {
    console.log("8081 is the magic port");
});