const fs = require("fs");

const path = "../data/read.txt";
let data = fs.readFileSync(path);
console.log("1번", data.toString());
data = fs.readFileSync(path);
console.log("2번", data.toString());
data = fs.readFileSync(path);
console.log("3번", data.toString());
data = fs.readFileSync(path);
console.log("4번", data.toString());
data = fs.readFileSync(path);
console.log("5번", data.toString());
