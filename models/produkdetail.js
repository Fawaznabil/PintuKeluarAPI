
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Produkdetail= db.define(
  "Produkdetails",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_produk_detail: {
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
    produkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "produks",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Produkdetail;
