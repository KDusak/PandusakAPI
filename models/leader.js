'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Leader.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    chief: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Leader',
  });
  return Leader;
};