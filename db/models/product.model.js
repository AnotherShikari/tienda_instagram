const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  precio_compra: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  precio_venta: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  marca: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  color: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  material: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  activo: {
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