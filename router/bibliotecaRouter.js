const express= require('express');
const router = express.Router();
const bibliotecaController= require("../controller/bibliotecaController");

router.get('/biblioteca', biblioteca/controller.registrarLibros);
router.put('/biblioteca/:id', bibliotecaController.actualizarLibros);



module.exports= router; 