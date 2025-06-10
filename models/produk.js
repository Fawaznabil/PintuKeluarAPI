
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Produk= db.define(
  "Produks",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_produk: {
      type: DataTypes.STRING,
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
    pilihlayananId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pilihlayanans",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Produk;
