'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ChildExpenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      breakfastCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      breakfastCost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      morningSnackCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      morningSnackCost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      lunchCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      lunchCost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      afternoonSnackCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      afternoonSnackCost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      dinnerCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dinnerCost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      rewardsCost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      entryFees: {
        allowNull: false,
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
    await queryInterface.dropTable('ChildExpenses');
  }
};