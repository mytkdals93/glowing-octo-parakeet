const fs = require("fs").promises;

const path = "../data/writeme.txt";
fs.writeFile(path, "글이 입력됩니다.")
  .then(() => {
    console.log("파일 작성 성공");
    return fs.readFile(path);
  })
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
