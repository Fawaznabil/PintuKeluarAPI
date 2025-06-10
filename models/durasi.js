
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Durasi= db.define(
  "Durasis",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    durasi: {
      type: DataTypes.INTEGER,
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
  },
  {
    freezeTableName: true,
  }
);

export default Durasi;
