const axios = require("axios");
const express = require("express");
const app = express();
const http = require("http");
const PORT = process.env.PORT || 5000;

let output;

const promise = axios
  .get(
    "http://calendarific.com/api/v2/holidays?api_key=93fc06b4cc4d81e7ce6ca488603c23120c66d31d&country=FI&year=2020"
  )
  .then(response => {
    let data = response.data;
    console.log(typeof data.response.holidays[0].name);
    let table = `<table align="center" class="pure-table pure-table-horizontal" >
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
        </tr>
    </thead><tbody>`;

    for (let i = 0; i < data.response.holidays.length; i++) {
      table +=
        "<tr><td style='font-weight: bold;'>" +
        data.response.holidays[i].name +
        "</td><td>" +
        data.response.holidays[i].description +
        "</td><td>" +
        data.response.holidays[i].date.iso +
        "</td></tr>";
    }

    table += "</tbody></table>";

    output =
      `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>title</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@1.0.1/build/pure-min.css"
          integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="css/mycss.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <h1>Holidays in finland 2020</h1>` +
      table +
      `</body>
    </html>`;
  })
  .catch(error => {
    console.log(error);
  });

app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.send(output);
});

app.get("*", function(req, res) {
  res.send("Cant find the requested page", 404);
});

app.listen(8081, function() {
  console.log("Example app listening on port 8081!");
});
