const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Catergory extends Model {}

Catergory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    catergory_name: {
      //Test using ENUM Datatype, a string object that limits the value chosen from a list of allowed values.
      type: DataTypes.ENUM('fruits', 'vegetables', 'herbs', 'dairy'),
      allowNull: false,
    },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'catergory',
  }
);

module.exports = Catergory;