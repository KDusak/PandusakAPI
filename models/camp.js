'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Camp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.CampDescription);
      this.hasOne(models.ChildExpenses);
      this.hasOne(models.LeaderExpenses);
    }
  }
  Camp.init({
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    campDescriptionId: DataTypes.INTEGER,
    childExpensesId: DataTypes.INTEGER,
    leaderExpensesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Camp',
  });
  Camp.associate = (models) => {
    Camp.hasOne(sequelize.define('CampDescription'));
    Camp.hasOne(sequelize.define('ChildExpenses'));
    Camp.hasOne(sequelize.define('LeaderExpenses'));
  }
  return Camp;
};