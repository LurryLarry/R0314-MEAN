// non-blocking, event driven way

// const fs = require("fs");

// console.log("Program started");
// try {
//   let data = fs.readFileSync("example.txt"); // sync
//   console.log(data.toString());

//   for (let i = 0; i < 15; i++) {
//     console.log("Node just keeps on going while the file is being read...");
//   }

//   console.log("Program finished");
// } catch (err) {
//   console.log("Tapahtui virhe: " + err);
// }
// traditional blocking way (normal way). The basic question is: “should code run in the background while I’m reading this file?” If yes, use async. Otherwise, use sync.

const fs = require("fs");

console.log("Program started");

fs.readFile("example.txt", (err, data) => {
  // async
  if (err) {
    return console.log("Tapahtui virhe: " + err); // has to be return to not run the code below
  }
  console.log(data.toString());
});

fs.readFile("example2.txt", (err, data) => {
  // async
  if (err) {
    return console.log("Tapahtui virhe: " + err); // has to be return to not run the code below
  }
  console.log(data.toString());
});

for (let i = 0; i < 15; i++) {
  console.log("Node just keeps on going while the file is being read");
}
