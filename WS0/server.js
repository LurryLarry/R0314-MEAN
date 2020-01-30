const http = require('http');
const app = http.createServer((request, res) => {

  res.writeHead(200, {"Content-Type": "text/html"});

  if (request.url === "/") {

    res.write("Olet saapunut palvelimen juureen.");

    res.write(`<h1>Taulukko</h1>
    <table border="1">
  <tr>
    <th>Name</th>
    <th>Address</th>
    <th>City</th>
  </tr>
  <tr>
    <th>Meitsi</th>
    <th>Minun tie 5</th>
    <th>Vantaa</th>
  </tr>
  <tr>
    <th>Naapuri</th>
    <th>Naapurin tie 6</th>
    <th>Vantaa</th>
  </tr>
    </table>`);

  } else if (request.url === "/helloworld") {
    res.write("Nyt yrität hakea hoi Maailmaa!");
  } else if (request.url === "/topsecret") {
    res.write("Tervetuloa salakerhoon");
  }




  res.end();
});

app.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
