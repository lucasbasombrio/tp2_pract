import { Router } from "express";
import UserController from "../Controllers/UserController.js";


const userController = new UserController();

const userRoutes = Router();

userRoutes.get("/");

userRoutes.get("/:id");

userRoutes.post("/", userController.createUser);

userRoutes.put("/:id");

userRoutes.delete("/:id");

export default userRoutes;
