const axios = require("axios");

const promise = axios
  .get("http://www.omdbapi.com/?s=breaking+bad&apikey=5cf7b6fb")
  .then(response => {
    let data = response.data;
    console.log(data);
    console.log(typeof data);

    let output = `<table style="width: auto"; border="1">
    <tr>
    <th>Elokuva</th>
    <th>Vuosi</th>
    <th>Kuva</th>
    </tr>`;

    for (var i = 0; i < data.Search.length; i++) {
      output +=
        "<tr>" +
        "<td>" +
        data.Search[i].Title +
        "</td>" +
        "<td>" +
        data.Search[i].Year +
        "</td>" +
        '<td align ="center">' +
        '<img style="height: 80%; width: 80%;" src=' +
        data.Search[i].Poster +
        '">' +
        "</td>" +
        "</img>" +
        "</td>" +
        "</tr>";
    }
    output += "</table>";

    console.log(output);
    module.exports = output;
    // console.log(typeof data);
    // console.log(data.Search[1].Title);
  })
  .catch(error => {
    console.log(error);
  });
