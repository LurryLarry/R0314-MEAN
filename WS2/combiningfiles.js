const fs = require("fs");

fs.readFile("example.txt", (err1, textdata1) => {
  fs.readFile("example2.txt", (err2, textdata2) => {
    if (err1) {
      return console.log(err1);
    } else if (err2) {
      return console.log(err2);
    }
    let combinedtexts = textdata1 + textdata2;
    fs.writeFile("message.txt", "I wrote this! " + combinedtexts, err => {
      if (err) {
        return console.log(err);
      }
      console.log("The file has been saved!");

      fs.appendFile("message.txt", "I wrote this!", err => {
        if (err) {
          return console.log(err);
        }
        console.log('The "data to append" was appended to file!');
      });
    });
  });
});

fs.readFile("message.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data.toString());
});
