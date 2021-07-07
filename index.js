const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello RBK");
});

app.get("/cohorts", (req, res) => {
  res.send("C14 and C13");
});

app.listen(3000, () => {
  console.log("up and running");
});
