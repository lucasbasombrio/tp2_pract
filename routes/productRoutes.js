import { Router } from "express";

const productRoutes = Router() //que el archivo se llame igual a la const es clave para no hacerse lio

productRoutes.get("/", (req,res)=>{
    res.send("get all products")
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