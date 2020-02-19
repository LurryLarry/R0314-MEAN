const fs = require("fs");

fs.unlink("./message.txt", err => {
  if (err) {
    return console.log(err);
  }
  console.log("./message.txt was deleted");
});
