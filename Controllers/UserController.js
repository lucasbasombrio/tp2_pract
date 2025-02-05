import User from "../Models/User.js";

class UserController {
  createUser = async (req, res) => {
    try {
        const {name, mail, password} = req.body
        const data = await User.create({name, mail, password});

      //res.status(201).send({ success: true, message: data });
      res.status(201).send({ success: true, message: `usuario ${data.name} creado con exito` });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
