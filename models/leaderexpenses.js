'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaderExpenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LeaderExpenses.init({
    breakfastCount: DataTypes.NUMBER,
    breakfastCost: DataTypes.NUMBER,
    morningSnackCount: DataTypes.NUMBER,
    morningSnackCost: DataTypes.NUMBER,
    lunchCount: DataTypes.NUMBER,
    lunchCost: DataTypes.NUMBER,
    afternoonSnackCount: DataTypes.NUMBER,
    afternoonSnackCost: DataTypes.NUMBER,
    dinnerCount: DataTypes.NUMBER,
    dinnerCost: DataTypes.NUMBER,
    payment: DataTypes.NUMBER,
    entryFees: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'LeaderExpenses',
  });
  return LeaderExpenses;
};