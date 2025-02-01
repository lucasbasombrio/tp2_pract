import express from "express"
//console.log("🚀 ~ express:", express)

const app= express()
// console.log("🚀 ~ app:", app)

app.get("/",(peticion, respuesta)=>{ //primer parametro "/" es la URL, que al ser solo al barra es la base
    respuesta.send("get ok")
})      

app.post("/",(req, res)=>{ //req = request
    res.send("post ok")
})

//muestra la fecha, se pude utilizar el modulo moment para que lo muestre de otra manera
app.get("/fecha", (req, res)=>{
    const date = new Date();
    res.send({date});  
})

//contador de clicks
let count = 0;
app.get("/count", (req, res)=>{
    count++;
    res.send({count});
})

//servir un archivo html: estatico en la tura "/". Utiliza el middlewarte express.static 
// para servir el archivo html desde una carpeta especifica en tu proyecto
app.use("/archivo",express.static("public/index.html"))
app.use("/archivo2",express.static("public/about.html"))

//para hacer las url dinamicas es con meta.url o algo asi, clase 7 a la hora mas o menos, 
// algo de dirname y filename


app.listen(8080,()=>{
console.log("server ok")

})