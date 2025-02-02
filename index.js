import express from "express"
import routes from "./routes/routes.js"
import morgan from "morgan"  //middleware de Node.js y Express
//import { methodLoger } from "./middlewares/methodLoger.js"


const app = express()

app.use(express.urlencoded({extended:true})) // se usa este middleware para que decodifique
//  lo que se pasa por  el body en encoded, o sea cuando el usuario pasa info al server, con esto puedo 
// leer el osval que pasé en el thunderclient
//app.use(express.json()) //este es para leer lo que se pasa por el body pero en formato json

 //app.use(morgan("tiny"))
//app.use(methodLoger) // uso el middleware debajo del const app porque una vez creada
//  esa const le doy uso al middleware, el middleware afecta lo que está debajo de donde fue llamado



// ya que en routes manejo todo, aca solo uso el routes
app.use(routes)







app.listen(8080, ()=>{
console.log("🚀 listening")  
})