
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const merekproduk= db.define(
  "merekproduks",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_produk_merek: {
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
    produkdetailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "produkdetails",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default merekproduk;
