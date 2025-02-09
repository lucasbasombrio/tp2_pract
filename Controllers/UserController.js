import { User, Role } from "../Models/models.js";
import { generateToken, verifyToken } from "../utils/token.js";

class UserController {
  // createUser(){}
  createUser = async (req, res) => {
    try {
      const { name, mail, password, roleId } = req.body;
      const data = await User.create({ name, mail, password, roleId });
      res.status(201).send({
        success: true,
        message: `Usuario ${data.name} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  readAllUser = async (req, res) => {
    try {
      const data = await User.findAll({
        attributes: ["name", "mail", "isActive", "roleId"],
        include: {
          model: Role,
          attributes: ["name"],
        },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  readUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findOne({
        attributes: ["name", "mail", "isActive"],
        where: { id },
        include: {
          model: Role,
          attributes: ["name"],
        },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
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
      res.status(400).send({ succces: false, message: error.message });
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
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  login = async (req, res) => {
    try {
      const { mail, password } = req.body;
      const data = await User.findOne({ where: { mail } });
      if (!data) throw new Error("No pasas");
      const validatePassword = await data.validatePassword(password);
      if (!validatePassword) throw new Error("No pasas");

      const payload = {
        id: data.id,
        name: data.name,
      };

      const token = generateToken(payload);
      console.log("🚀 ~ UserController ~ login= ~ token:", token);
      res.cookie("token", token);
      res.status(200).send({
        succces: true,
        message: "Usuario logueado con exitoooo",
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  logout = async (req, res) => {
    try {
      res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "strict" });
      res.status(200).send({ success: true, message: "Logout exitoso" });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };

  me = async (req, res) => {
    console.log(
      "🚀 ~ UserControllerrrrrrr ~ me=async ~ req:",
      req.cookies.token
    );
    try {
      const { token } = req.cookies;
      if (!token) throw new Error("No pasas");
      const {payload} = verifyToken(token);

      res.status(200).send({
        succces: true,
        message: payload,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
}

export default UserController;
