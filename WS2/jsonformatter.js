const http = require("http");
const fs = require("fs");

const app = http.createServer((request, res) => {
  if (request.url === "/jsonformatter") {
    fs.readFile("sampledata.json", (err, jsonData) => {
      if (err) {
        console.log(err);
      } else {
        let contents = jsonData;
        let jsonContent = JSON.parse(contents);

        res.write("<table border='1'>");
        for (var i = 0; i < jsonContent.length - 1; i++) {
          res.write("<tr>");
          res.write("<td>" + jsonContent[i].name + "<td>");
          res.write("<td>" + jsonContent[i].age + "<td>");
          res.write("<td>" + jsonContent[i].company + "<td>");
          res.write("<td>" + jsonContent[i].address + "<td>");
          res.write("</tr>");
        }
        res.write("</table>");
        res.end();
      }
    });
  }
});
app.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
