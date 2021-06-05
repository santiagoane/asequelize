
let db = require("../database/models");

let peliculasController = {

   crear: function (req, res) {
      db.Genero.findAll()
         .then(function (generos) {
            return res.render("creacionPeliculas", { generos: generos });
         })
   },

   guardado: function (req, res) {

      db.Pelicula.create({
         title: req.body.titulo,
         awards: req.body.premios,
         release_date: req.body.fecha_estreno,
         gerne_id: req.body.genero,
         lenght: req.body.duracion,
         rating: req.body.rating
      })

      res.redirect("/peliculas");
   },
   listado: function (req, res) {
      db.Pelicula.findAll()
         .then(function() {
            res.render("listadoPeliculas", { peliculas: peliculas })
         })
   }


}

module.exports = peliculasController