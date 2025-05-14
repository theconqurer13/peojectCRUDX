'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FamilyMembers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FamilyMembers.init({
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    relation: DataTypes.STRING,
    education: DataTypes.STRING,
    occupation: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    mainPersonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FamilyMembers',
  });
  return FamilyMembers;
};