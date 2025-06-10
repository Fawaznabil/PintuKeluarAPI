// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {});

//   User.associate = function(models) {
//     User.hasMany(models.Layanan, { foreignKey: 'userId' });
//   };

//   return User;
// };

import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Pastikan Anda sudah mengatur koneksi database

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User; // Pastikan ada `export default`
