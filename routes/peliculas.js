var express = require('express');
var router = express.Router();
var peliculasController = require("../controllers/peliculasController")


router.get("/crear",peliculasController.crear)

router.post("/crear",peliculasController.guardado)

router.get("/",peliculasController.listado)

module.exports = router;