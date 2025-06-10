'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produkdetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_produk_detail: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Nama tabel harus sesuai dengan yang dibuat Sequelize
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      layananId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'layanans', // Nama tabel harus sesuai dengan yang dibuat Sequelize
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      pilihlayananId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pilihlayanans', // Nama tabel harus sesuai dengan yang dibuat Sequelize
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      produkId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produks', // Nama tabel harus sesuai dengan yang dibuat Sequelize
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produkdetails');
  }
};