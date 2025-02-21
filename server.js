// archivo de ejecusion
const express= require("express");
const app= express();
const bibliotecaRouter=require("./router/bibliotecaRouter");
app.use(express.json());


//mildeware
app.use("/api", bibliotecaRouter);


 





const PORT= 3000;
app.listen(PORT,()=>{
    console.log("en el servidor corriendo")
});
