const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      //Test using ENUM Datatype, a string object that limits the value chosen from a list of allowed values.
      type: DataTypes.ENUM('fruits', 'vegetables', 'herbs', 'dairy', 'flowers'),
      allowNull: false,
    },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;