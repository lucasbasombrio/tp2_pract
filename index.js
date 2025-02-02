import express from "express";
import routes from "./routes/routes.js";
import { errorNotFound } from "./middlewares/errorNotFound.js";


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(routes);


app.use(errorNotFound)

app.listen(8080, () => {
  console.log("🚀 listening");
});
