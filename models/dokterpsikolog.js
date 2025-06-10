
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const dokterPsikolog= db.define(
  "dokterPsikologs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pilih_dokter_psikolog: {
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
  },
  {
    freezeTableName: true,
  }
);

export default dokterPsikolog;
