import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";

class User extends Model {}

User.init(          //modelo sql en js
  {
    //primer parametro le paso los campos de la tabla
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue:true,
    },
  },
  {
    //segundo parametro le paso la conexion
    sequelize: connectionDb,
    modelName: "User",
    
  }
);

export default User;
