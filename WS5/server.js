const express = require("express");
const app = express();


app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render('pages/index.ejs', {
        new_heading: "This was passed from the JS file",
        new_paragraph: "Lorem Ipsum...",
    });
});

let data = {
    users: [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 42 },
        { name: 'Doe', age: 51 }
    ]
};

app.get('/users', function (req, res) {
    res.render('pages/users', data);
});

app.listen(8081);
console.log('8081 is the magic port')