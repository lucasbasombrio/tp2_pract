import { Router } from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";
import { methodLoger } from "../middlewares/methodLoger.js"

const routes = Router()

//desde aca manejo todas als rutas, en, por ejemplo, userRouter, manejo lo mas especifico de esa clase
routes.use("/user",userRoutes) 
//routes.use(methodLoger)//afecta a productos, no a users
routes.use("/product",productRoutes) 

export default routes