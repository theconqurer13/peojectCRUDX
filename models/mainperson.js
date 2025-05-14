'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainPerson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MainPerson.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    mobileNumber: DataTypes.INTEGER,
    email: DataTypes.STRING,
    education: DataTypes.STRING,
    age: DataTypes.STRING,
    occupation: DataTypes.STRING,
    gotra: DataTypes.STRING,
    profilePhotoPath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MainPerson',
  });
  return MainPerson;
};