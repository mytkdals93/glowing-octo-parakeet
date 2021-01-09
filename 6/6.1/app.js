const express = require("express");
const path = require("path");
const app = express();

app.use(
  (req, res, next) => {
    console.log("1모든 요청에 실행하고싶어요.");
    next();
  },
  (req, res, next) => {
    console.log("2모든 요청에 실행하고싶어요.");
    next();
  },
  (req, res, next) => {
    console.log("3모든 요청에 실행하고싶어요.");
    // throw new Error("에러발생했음");
    next();
  }
);
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  // res.send("hello express");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.send("About");
});

// app.get("*", (req, res) => {
//   res.send("Hello everyone");
// });
app.use((req, res, next) => {
  res.send("404처리");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send(err.message);
});

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
