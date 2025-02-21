let db= require("../config/database.js");

class BibliotecaController{

static async registrarLibros(req, res){
    let {titulo,autor,anio_publicacion,disponibilidad}=req.body;
    let libro= await db.query("Insert Into libro(titulo,autor,anio_publicacion,disponibilidad)VALUES(?,?,?,?)",[titulo,autor,anio_publicacion,disponibilidad]);
    res.json(req.body);
}

static async actualizacionLibros(req, res){
    let {id}=req.params;        
    let {titulo,autor,anio_publicacion,disponibilidad}=req.body;
    await db.query("UPDATE Libro set titulo=?,autor=?,anio_publicacion=?,disponibilidad=? where id=?",[titulo,autor,anio_publicacion,disponibilidad,id]);
    res.json(req.body);
}
static async consultarLibros(req,res){
    let [consultar]=await db.query("select * from Libro");
    res.json(consultar);

}
static async eliminarLibros(req,res){
    let {id}=req.params;
    await db.query("DELETE FROM Libro where id=?",[id]);
    res.send({mensaje:"libro eliminado"});
}
static async prestarLibros(req,res){
    let{fecha_prestamo,prestamos_totales,fecha_devolucion,devuelto,idLibro}=req.body;
    let prestamos=await db.query("Insert Into prestamo(fecha_prestamo,prestamos_totales,fecha_devolucion,devuelto,idLibro) VALUES(?,?,?,?,?)",[fecha_prestamo,prestamos_totales,fecha_devolucion,devuelto,idLibro]);
    res.json(req.body);

}
static async consultarLibrosPrestados(req,res){
    let [consultarPrestados]=await db.query("select * from Prestamo");
    res.json(consultarPrestados);
}
static async modificarPrestamos(req,res){
    let {id}=req.params
    let {fecha_prestamo,prestamos_totales,fecha_devolucion,devuelto,idLibro}=req.body;
    await db.query("UPDATE prestamo set fecha_prestamo=?,prestamos_totales=?,fecha_devolucion=?,devuelto=? where id=?",[fecha_prestamo,prestamos_totales,fecha_devolucion,devuelto,idLibro]);
    res.json(req.body);
}

}
module.exports=BibliotecaController;
 