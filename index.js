const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

console.log(process.env.SECRET)

app.get("/", (req, res) => {
  res.send("hello RBK");
});

app.get("/cohorts", (req, res) => {
  res.send("C14 and C13, and C12");
});

app.listen(PORT, () => {
  console.log(`up and running on port: ${PORT}`);
});
