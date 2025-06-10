// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   const Layanan = sequelize.define('Layanan', {
//     nama_layanan: DataTypes.STRING,
//     userId: DataTypes.INTEGER
//   }, {});

//   Layanan.associate = function(models) {
//     Layanan.belongsTo(models.User, { foreignKey: 'userId' });
//   };

//   return Layanan;
// };

import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Layanan = db.define(
  "Layanans",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_layanan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Sesuai nama tabel User
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);


export default Layanan;
