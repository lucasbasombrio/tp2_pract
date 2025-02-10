import { Router } from "express";

const routes = Router();

 routes.post("/")

 routes.get("/")
 routes.get("/all")
 routes.get("/:cantidad")

 routes.delete("/")

export default routes;