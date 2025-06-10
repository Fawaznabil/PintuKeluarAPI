
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Booking= db.define(
  "Bookings",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    jam_booking: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    layananId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Layanans",
        key: "id",
      },
    },
    dokterpsikologId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "dokterPsikologs",
        key: "id",
      },
    },
    durasiId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "durasis",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Booking;
