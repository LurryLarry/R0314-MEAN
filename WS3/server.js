const http = require("http");

const app = http.createServer((request, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (request.url === "/") {
    const results = require("./movies.js");
    // let json = JSON.stringify(results);
    console.log(typeof results);
    console.log(results);

    res.write(results.toString());
    res.end();
  }
});

app.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
