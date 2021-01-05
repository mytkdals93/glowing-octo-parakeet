const fs = require("fs");
const zlib = require("zlib");

const readPath = "../data/buffer.txt";
const writePath = "../data/writeme3.txt";
const readStream = fs.createReadStream(readPath, { hightWaterMark: 16 });
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream(writePath);
readStream.pipe(zlibStream).pipe(writeStream);
