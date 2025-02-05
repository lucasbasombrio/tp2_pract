import User from "../Models/User.js";

class UserController {
  createUser = async (req, res) => {
    try {
      const { name, mail, password } = req.body;
      const data = await User.create({ name, mail, password });

      //res.status(201).send({ success: true, message: data });
      res.status(201).send({
        success: true,
        message: `usuario ${data.name} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  readAllUser = async (req, res) => {
    try {
      //const data = await User.findAll();
      const data = await User.findAll({
        attributes: ["name", "mail", "isActive"],
      });

      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  readUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findAll({
        attributes: ["name", "mail", "isActive"],
        where: { id },
      });

      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.destroy({
        where: { id },
      });

      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, mail, isActive } = req.body;
      const data = await User.update(
        { name, mail, isActive },
        { where: { id } }
      );

      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
