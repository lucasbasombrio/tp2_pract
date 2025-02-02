import { Router } from "express";
import connectionDb from "../connection/connectionDb.js";
//console.log("🚀 ~ connectionDb:", connectionDb)

const productRoutes = Router() //que el archivo se llame igual a la const es clave para no hacerse lio

productRoutes.get("/", async(req,res)=>{ //se le agrega async porque es asincronico, trabajamos con promesas
   // res.send("get all products")
   try {
    
        const query = "SELECT id, name description, price, stock, category FROM productos"
        const [data] =await connectionDb.query(query) //se pone [data] para que te envie el primer array, porque 
        // si pongo simplemente data o [data, field] manda todo 
        //console.log("🚀 ~ productRoutes.get ~ data:", data)

        res.status(200).send({success:true, message:data})

   } catch (error) {
    res.status(400).send({success:false, message:error})
   }
})

productRoutes.get("/:id", (req,res)=>{
    res.send("get products by id")
})

productRoutes.post("/", (req,res)=>{
    console.log("🚀 ~ productRoutes.post ~ req:", req.body)
    
    res.send("create product")
})

productRoutes.put("/:id", (req,res)=>{
    res.send("modifica por id")
})

productRoutes.delete("/:id", (req,res)=>{
    res.send("delete products by id")
})


export default productRoutes