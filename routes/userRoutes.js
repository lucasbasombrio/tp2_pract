import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import { vallidateLogin } from "../middlewares/validateLogin.js";


const userController = new UserController();

const userRoutes = Router();


userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login )
userRoutes.post("/logout", userController.logout);

userRoutes.use(vallidateLogin);

userRoutes.get("/", userController.readAllUser);
userRoutes.get("/me", userController.me);
userRoutes.get("/:id", userController.readUserById);

userRoutes.delete("/:id", userController.deleteUser);
userRoutes.put("/:id", userController.updateUser);

export default userRoutes;
