import express from "express";
import routes from "./routes/routes.js";
import { errorNotFound } from "./middlewares/errorNotFound.js";
import User from "./Models/User.js";
import connectionDb from "./connection/connectionDb.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(errorNotFound);

await connectionDb.sync({force:true}); //alter true para que haga el DDL y todo este actualizado
                        //force:true es para que dropee y cree todo el tiempo, para desarrollar usar este
app.listen(8080, () => {
  console.log("🚀 listening");
});
