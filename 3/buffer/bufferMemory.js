const fs = require("fs");

console.log("before:", process.memoryUsage().rss);

const datal = fs.readFileSync("../data/big.txt");
fs.writeFileSync("../data/big2.txt", datal);
console.log("end:", process.memoryUsage().rss);
