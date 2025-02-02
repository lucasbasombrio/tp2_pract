import { Router } from "express";

const userRoutes = Router()

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