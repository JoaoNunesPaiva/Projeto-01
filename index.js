const express = require("express"); // importar o express - previamente instalado
const app = express(); // criar aplicação do express

app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("Hi!");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/bye", (req, res) => {
  res.send("Bye World!");
});

// é a mesma coisa que em cima
// function getRoot(req,res){

// }
// app.get("/", getRoot)

app.listen(3000, () => {
  console.log("Engine Started...");
});

// GET
// POST
// PUT
// PATCH
// DELETE
