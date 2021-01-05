const fs = require("fs");

console.log("before:", process.memoryUsage().rss);

const readStream = fs.createReadStream("../data/big.txt");
const writeStream = fs.createWriteStream("../data/big3.txt");
readStream.pipe(writeStream);
readStream.on("end", () => {
  console.log("end:", process.memoryUsage().rss);
});
