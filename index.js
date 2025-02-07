import express from "express";
import routes from "./routes/routes.js";
import { errorNotFound } from "./middlewares/errorNotFound.js";
import connectionDb from "./connection/connectionDb.js";
import { SERVER_PORT } from "./config/config.js";
import cookieParser from "cookie-parser";
//import { roleSeed } from "./seed/roleSeed.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(routes);

app.use(errorNotFound);

await connectionDb.sync({force:false}); //alter true para que haga el DDL y todo este actualizado
                        //force:true es para que dropee y cree todo el tiempo

                        //await roleSeed()

app.listen(SERVER_PORT, () => {
  console.log(`🚀 listening  ${SERVER_PORT}`);
});
