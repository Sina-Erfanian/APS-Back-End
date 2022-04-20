const express = require("express");

const server = express();

server.get("/multiply", (req, res) => {
  const { value1, value2 } = req.query;

  res.send(`multiply : ${value1 * value2}`);
});

server.listen("5000", () => {
  console.log("server is running on 5000");
});
