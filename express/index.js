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


app.listen(8080,()=>{
console.log("server ok")

})