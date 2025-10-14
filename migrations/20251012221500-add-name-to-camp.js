'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Camps', 'name', {
      type: Sequelize.STRING,
      allowNull: true // or false if required
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Camps', 'name');
  }

};
