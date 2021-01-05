const fs = require("fs").promises;
const path = "../data/read.txt";

fs.readFile(path)
  .then((data) => {
    console.log("1번", data.toString());
    return fs.readFile(path);
  })
  .then((data) => {
    console.log("2번", data.toString());
    return fs.readFile(path);
  })
  .then((data) => {
    console.log("3번", data.toString());
    return fs.readFile(path);
  })
  .then((data) => {
    console.log("4번", data.toString());
    return fs.readFile(path);
  });

//좀 더 깔끔하게
async function main() {
  let data = await fs.readFile(path);
  console.log("main 1번", data.toString());
  data = await fs.readFile(path);
  console.log("main 2번", data.toString());
  data = await fs.readFile(path);
  console.log("main 3번", data.toString());
  data = await fs.readFile(path);
  console.log("main 4번", data.toString());
}
main();
