const http = require("http");
const fs = require("fs");

const app = http.createServer((request, res) => {
  if (request.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Nothing to see here");
  } else if (request.url === "/frontpage") {
    fs.readFile("./frontpage.html", (err, html) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 file not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      }
    });
  } else if (request.url === "/contact") {
    fs.readFile("./contact.html", (err, html) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 file not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      }
    });
  } else if (request.url === "/plaintext") {
    fs.readFile("./example.txt", (err, textdata) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 file not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(textdata);
      }
    });
  } else if (request.url === "/json") {
    fs.readFile("sampledata.json", (err, jsondata) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 file not found");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsondata);
      }
    });
  }
});

app.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
