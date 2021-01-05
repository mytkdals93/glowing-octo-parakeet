const fs = require("fs");

const writeStream = fs.createWriteStream("../data/writeStream.txt");
writeStream.on("finish", () => {
  console.log("파일 쓰기 완료");
});

writeStream.write("1. 이 글을 씁니다. \n");
writeStream.write("2. 이 글을 씁니다. \n");
writeStream.write("3. 이 글을 씁니다. \n");
writeStream.write("4. 이 글을 씁니다. \n");
writeStream.write("5. 이 글을 씁니다. \n");
writeStream.write("6. 이 글을 씁니다. \n");
writeStream.write("7. 이 글을 씁니다. \n");
writeStream.write("8. 이 글을 씁니다. \n");
writeStream.write("9. 이 글을 씁니다. \n");
writeStream.write("10. 이 글을 씁니다. \n");
writeStream.end();
