import express from "express";
import notaRoutes from "./routes/notaRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas para gestionar las notas
app.use(notaRoutes);

app.listen(8080, ()=>{
    console.log("🚀 ~ app.listen ~ 8080")
    
})