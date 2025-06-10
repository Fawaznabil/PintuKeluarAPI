'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jam_booking: {
        type: Sequelize.TIME
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
      dokterpsikologId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'dokterPsikologs', // Nama tabel harus sesuai dengan yang dibuat Sequelize
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      durasiId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'durasis', // Nama tabel harus sesuai dengan yang dibuat Sequelize
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
    await queryInterface.dropTable('Bookings');
  }
};