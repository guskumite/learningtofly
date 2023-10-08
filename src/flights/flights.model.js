import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Flight = sequelize.define("flight", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: "flight_id",
  },
  origin: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false,
    field: "origin_id",
  },
  destination: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false,
    field: "destination_id",
  },
  plane: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false,
    field: "plane_id",
  },
  departure: {
    type: DataTypes.TIME,
    allowNull: false,
    field: "departure_time",
  },
  checkin: {
    type: DataTypes.TIME,
    allowNull: false,
    field: "check_in",
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pending",
    field: "flight_status",
  },
});

export default Flight;
