import { DataTypes, Model } from "sequelize";
import connectionDb from "../connection/connectionDb.js";

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connectionDb,
    modelName: "Role",
  }
);

export default Role;
