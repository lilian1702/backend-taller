let db= require("../config/database.js");

class BibliotecaController{

    static async registrarLibros(req, res){
        let {titulo,autor,anio_publiacion,disponibilidad}=req.body;
        let libro= await db.query("SELECT * FROM Libros")
        res.json(req.body);
        }

    static async actualizarLibros(req, res){
        let {titulo,autor,anio_publicacion,disponibilidad}=req.body;
        let libro= await db.query("INSERT INTO Libro(nombre,apellido,email,telefono) VALUES(?,?,?,?)",[nombre,apellido,email,telefono]);
        res.json(req.body);
        }
    
    
    


}

module.exports=BibliotecaController;
 