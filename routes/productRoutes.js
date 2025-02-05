import { Router } from "express";
import connectionDb from "../connection/connectionDb.js";
//console.log("🚀 ~ connectionDb:", connectionDb)

const productRoutes = Router(); //que el archivo se llame igual a la const es clave para no hacerse lio

productRoutes.get("/", async (req, res) => {
  //se le agrega async porque es asincronico, trabajamos con promesas
  // res.send("get all products")
  try {
    const query =
      "SELECT id, name, description, price, stock, category FROM productos";
    const [data] = await connectionDb.query(query); //se pone [data] para que te envie el primer array, porque
    // si pongo simplemente data o [data, field] manda todo
    //console.log("🚀 ~ productRoutes.get ~ data:", data)

    res.status(200).send({ success: true, message: data });
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
});

productRoutes.get("/:id", (req, res) => {
  res.send("get products by id");
});

productRoutes.post("/", async (req, res) => {
  try {
    const query = "";

    res.status(200).send({ success: true, message: data });
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
});

productRoutes.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, category } = req.body; //el body lo puedo leer gracias
    // al express, o sea estas lineas en el index app.use(express.urlencoded({ extended: true }));
    // y app.use(express.json()) . Obviamente instalando la libreria de express
    const query = "UPDATE productos SET name=?, description=?, price =?, stock=?, category=? WHERE id=?";
    const[data] = await connectionDb.query(query, [
      name,
      description,
      price,
      stock,
      category,
      id,
    ]);
    //console.log("🚀 productRoutes.get data:", data);
    
    res.status(200).send({ success: true, message: data });
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
});

productRoutes.delete("/:id", (req, res) => {
  res.send("delete products by id");
});

export default productRoutes;
