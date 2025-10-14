'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResortExpenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      electricity: {
        type: Sequelize.DECIMAL
      },
      gas: {
        type: Sequelize.DECIMAL
      },
      water: {
        type: Sequelize.DECIMAL
      },
      waste: {
        type: Sequelize.DECIMAL
      },
      landLease: {
        type: Sequelize.DECIMAL
      },
      loan: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('ResortExpenses');
  }
};