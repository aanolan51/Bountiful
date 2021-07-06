const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goods extends Model {}

Goods.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    }
   
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'goods',
  }
);

module.exports = Goods;