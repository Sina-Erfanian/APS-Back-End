const express = require("express");

const server = express();

server.get("/chocolate", (req, res) => {
  const { amount } = req.query;

  res.send(`you want ${amount} chocolate`);
});

server.listen("5000", () => {
  console.log("server is running on 5000");
});
