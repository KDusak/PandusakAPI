'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChildExpenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChildExpenses.init({
    breakfastCount: DataTypes.INTEGER,
    breakfastCost: DataTypes.DECIMAL,
    morningSnackCount: DataTypes.INTEGER,
    morningSnackCost: DataTypes.DECIMAL,
    lunchCount: DataTypes.INTEGER,
    lunchCost: DataTypes.DECIMAL,
    afternoonSnackCount: DataTypes.INTEGER,
    afternoonSnackCost: DataTypes.DECIMAL,
    dinnerCount: DataTypes.INTEGER,
    dinnerCost: DataTypes.DECIMAL,
    rewardsCost: DataTypes.DECIMAL,
    entryFees: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ChildExpenses',
  });
  return ChildExpenses;
};