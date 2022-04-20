const express = require("express");

const server = express();

const PORT = 4500;

// server.use((req,res)=> {
//     res.send("<h1>This is a response</h1>")
// })

server.get("/", (req, res) => {
  res.send("This is a home page");
});

// server.get("/r/:something/:id",(req,res)=> {
//     const {something , id} = req.params
//     res.send(`<h1>Your params is ${something} with ${id} Id</h1>`)
// })

server.get("/search",(req,res)=> {
    const {name , fname} = req.query
    res.send(`welcome dear ${name} ${fname}`)
})

// server.get("/cat", (req, res) => {
//   res.send("Meow :/");
// });

// server.post("/cat",(req,res)=> {
//     res.send("From Post : Meow")
// })

// server.get("/dog", (req, res) => {
//   res.send("hop hop :/");
// });

// server.post("/dog", (req, res) => {
//   res.send("From Post : dog");
// });

// server.get("*", (req, res) => {
//   res.send("page not found");
// });

server.listen(PORT, () => {
  console.log("the server is run on port 4500");
});
