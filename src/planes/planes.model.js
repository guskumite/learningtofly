import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Plane = sequelize.define("plane", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: "plane_id",
  },
  airplane: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false,
    field: "plane_number",
  },
  model: {
    type: DataTypes.STRING(20),
    unique: false,
    allowNull: false,
    field: "model",
  },
  capacity: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false,
    field: "max_capacity",
  },
  airline: {
    type: DataTypes.STRING(40),
    allowNull: false,
    field: "airline",
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    field: "status",
  },
});

export default Plane;
