const express= require('express');
const router = express.Router();
const BibliotecaController= require("../controller/bibliotecaController");

router.post('/biblioteca',BibliotecaController.registrarLibros);
router.put('/biblioteca/:id', BibliotecaController.actualizacionLibros);
router.delete('/biblioteca/:id', BibliotecaController.eliminarLibros);
router.get('/biblioteca', BibliotecaController.consultarLibros);
router.post('/Libros',BibliotecaController.prestarLibros);
router.get('/Libros',BibliotecaController.consultarLibrosPrestados);
router.put('/Libros/:id',BibliotecaController.modificarPrestamos);

module.exports= router; 