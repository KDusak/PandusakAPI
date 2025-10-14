'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ResortExpenses extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Employee);
        }
    }

    ResortExpenses.init({
        electricity: DataTypes.NUMBER,
        gas: DataTypes.NUMBER,
        water: DataTypes.NUMBER,
        waste: DataTypes.NUMBER,
        landLease: DataTypes.NUMBER,
        loan: DataTypes.NUMBER
    }, {
        sequelize,
        modelName: 'ResortExpenses',
    });
    return ResortExpenses;
};