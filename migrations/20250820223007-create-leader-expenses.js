'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LeaderExpenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      breakfastCount: {
        type: Sequelize.INTEGER
      },
      breakfastCost: {
        type: Sequelize.DECIMAL
      },
      morningSnackCount: {
        type: Sequelize.INTEGER
      },
      morningSnackCost: {
        type: Sequelize.DECIMAL
      },
      lunchCount: {
        type: Sequelize.INTEGER
      },
      lunchCost: {
        type: Sequelize.DECIMAL
      },
      afternoonSnackCount: {
        type: Sequelize.INTEGER
      },
      afternoonSnackCost: {
        type: Sequelize.DECIMAL
      },
      dinnerCount: {
        type: Sequelize.INTEGER
      },
      dinnerCost: {
        type: Sequelize.DECIMAL
      },
      payment: {
        type: Sequelize.DECIMAL
      },
      entryFees: {
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
    await queryInterface.dropTable('LeaderExpenses');
  }
};