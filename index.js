const { json } = require("express");
const express = require("express"); // importar o express - previamente instalado
const app = express(); // criar aplicação do express
const { logger } = require("./middleware"); //import do modulo log.js

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NOT_FOUND = 404;
//uma variável com uma Array com 3 objetos
const db = [
  {
    id: 1,
    title: "Horror Movie",
    genre: "Horror",
    year: 1999,
    rentals: 7,
  },
  {
    id: 2,
    title: "Drama Movie",
    genre: "Drama",
    year: 2001,
    rentals: 300,
  },
  {
    id: 3,
    title: "Action Movie",
    genre: "Action",
    year: 2023,
    rentals: 7568,
  },
];

//CRUD - Create Read Update DELETE

// GET https://api.edit.pt/ => GET /
// GET https://api.edit.pt/directors => GET /directors

//REST

app.use(logger); //vai usar sempre nas rotas após

// GET https://api.edit.pt/movies => GET /movies     (ROTA)
app.get("/movies", (req, res) => {
  //res.json(db); //This method sends a JSON response.
  //a mesma coisa
  const movies = db.map((m) => {
    return {
      title: m.title,
      genre: m.genre,
      year: m.year,
    };
  });
  res.status(200).json(movies);
});

//GET /movies/:id
app.get("/movies/:id", (req, res) => {
  //get ID from request
  //fetch record from DB
  //return json
  //const id = parseInt(req.params.id);
  const movie = db.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    return res.status(HTTP_STATUS_NOT_FOUND).json({ error: "Movie not found" });
  }

  // for (let index = 0; index < db.length; index++) {
  //   if (id === db[index].id);
  //   {
  //     movie = db[index];
  //     break;
  //   }

  res.status(200).json(movie);
});

// Array.find
// Array.filter --
// Array.forEach --
// for (perceber bem o metodo for - estudar)

// app.get("/hello", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/bye", (req, res) => {
//   res.send("Bye World!");
// });
// é a mesma coisa que em cima
// function getRoot(req,res){
// }
// app.get("/", getRoot)

// ERROR HANDLING
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Error" });
});

app.listen(3000, () => {
  console.log("Engine Started...");
});

// GET
// POST
// PUT
// PATCH
// DELETE
