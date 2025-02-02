import { Router } from "express";

const userRoutes = Router() //que el archivo se llame igual a la const es clave para no hacerse lio

userRoutes.get("/", (req,res)=>{
    res.send("get all users")
})

userRoutes.get("/:id", (req,res)=>{
    res.send("get users by id")
})

userRoutes.post("/", (req,res)=>{
    res.send("create user")
})

userRoutes.put("/:id", (req,res)=>{
    res.send("modifica por id")
})

userRoutes.delete("/:id", (req,res)=>{
    res.send("delete users by id")
})


export default userRoutes