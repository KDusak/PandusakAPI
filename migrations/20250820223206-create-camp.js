'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Camps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      campDescriptionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CampDescriptions',
          key: 'id'
        }
      },
      childExpensesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ChildExpenses',
          key: 'id'
        }
      },
      leaderExpensesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LeaderExpenses',
          key: 'id'
        }
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
    await queryInterface.dropTable('Camps');
  }
};