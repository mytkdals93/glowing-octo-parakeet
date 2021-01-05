const fs = require("fs");
const path = "../data/read.txt";

fs.readFile(path, (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
});

fs.readFile(path, (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2번", data.toString());
});

fs.readFile(path, (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3번", data.toString());
});

fs.readFile(path, (err, data) => {
  if (err) {
    throw err;
  }
  console.log("4번", data.toString());
});
