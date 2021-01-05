const http = require("http");
const fs = require("fs").promises;
const PORT = 80;

const server = http
  .createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // res.write(`<h1>Hello Node! </h1>`);
    // res.write(`<p>Hello server</p>`);
    // res.end(`<p>Hello ZeroCho</p>`);
    try {
      res.end(await fs.readFile("./server3.html"));
    } catch (error) {
      console.log(error);
      res.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(error.message);
    }
  })
  .listen(PORT);
server.on("listening", () => {
  console.log(`${PORT}번 포트에서 서버 대기중입니다.`);
});
server.on("error", (error) => {
  console.log(error);
});
