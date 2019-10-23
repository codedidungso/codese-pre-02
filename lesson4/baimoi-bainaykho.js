// Async Await

let delay = async function() {
  console.log("BEGIN delay");
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 10000; j++) {
      var l;
    }
  }
  console.log("END delay");
};

let ASfunc = async () => {
  console.log("BEGIN funciton");
  await delay();
  console.log("END function");
};

console.log("BEGIN req");
ASfunc();
// ASfunc();
// ASfunc();
// ASfunc();
// ASfunc();
// ASfunc();
console.log("END req");

// const fs = require('fs')
const daylacaidexulifile = require("fs"); // File System

let thien = `thien dep trai`;
//  "./"
daylacaidexulifile.readFile("abc.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Du lieu doc duoc: ${data}`);
  }
});

daylacaidexulifile.writeFile()
