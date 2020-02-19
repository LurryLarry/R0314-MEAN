const fs = require("fs");

fs.mkdir("/newdata", { recursive: true }, err => {
  if (err) {
    return console.log(err);
  }
});

fs.readFile("example.txt", (err1, textdata1) => {
  fs.readFile("example2.txt", (err2, textdata2) => {
    if (err1) {
      return console.log(err1);
    } else if (err2) {
      return console.log(err2);
    }
    let combinedtexts = textdata1 + textdata2;
    fs.writeFile(
      "/newdata/message.txt",
      "I wrote this! " + combinedtexts, // prepending possible with additional module..
      err => {
        if (err) {
          return console.log(err);
        }
        console.log("The file has been saved!");

        fs.appendFile("/newdata/message.txt", "I wrote this!", err => {
          if (err) {
            return console.log(err);
          }
          console.log('The "data to append" was appended to file!');
        });
      }
    );
  });
});

fs.readFile("/newdata/message.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data.toString());
});
