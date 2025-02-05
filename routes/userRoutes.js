import { Router } from "express";
import UserController from "../Controllers/UserController.js";

const userController = new UserController();

const userRoutes = Router();

userRoutes.get("/", userController.readAllUser);
userRoutes.get("/:id", userController.readUserById);
userRoutes.post("/", userController.createUser);
userRoutes.delete("/:id", userController.deleteUser);
userRoutes.put("/:id", userController.updateUser);

export default userRoutes;
