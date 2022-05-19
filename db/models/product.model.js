const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  buy_price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  sell_price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  brand: {
    allowNull: true,
    notEmpty: false, 
    defaultValue: '',
    type: DataTypes.STRING,
  },
  size: {
    allowNull: true,
    notEmpty: false, 
    defaultValue: '',
    type: DataTypes.STRING,
  },
  color: {
    allowNull: true,
    notEmpty: false, 
    defaultValue: '',
    type: DataTypes.STRING,
  },
  material: {
    allowNull: true,
    notEmpty: false,
    defaultValue: '',
    type: DataTypes.STRING,
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Product extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}


module.exports = { PRODUCT_TABLE, ProductSchema, Product }