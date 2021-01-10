const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.cookie("name", encodeURIComponent(name), {
    expires: new Date(),
    httpOnly: true,
    path: "/",
  });
  res.send("Hello");
});
app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}포트에서 연결 대기중`);
});
