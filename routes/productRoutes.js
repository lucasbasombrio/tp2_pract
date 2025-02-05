import { Router } from "express";


const productRoutes = Router(); //que el archivo se llame igual a la const es clave para no hacerse lio

productRoutes.get("/");

productRoutes.get("/:id");

productRoutes.post("/");

productRoutes.put("/:id");

productRoutes.delete("/:id");

export default productRoutes;
