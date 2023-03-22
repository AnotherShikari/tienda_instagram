const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./product.model');
const { ORIGINSTOCK_TABLE } = require('./originStock.model');

const PRODUCT_STOCK_TABLE = 'product_stock';

const ProductStockSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productId: {
    field: 'product_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references:{
        model: PRODUCT_TABLE,
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  originStockId: {
    field: 'origin_stock_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references:{
        model: ORIGINSTOCK_TABLE,
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'amount',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class ProductStock extends Model {
    static associate(models) {
        this.belongsTo(models.Product, {
          as: 'product'
        });
        this.belongsTo(models.OriginStock, {
          as: 'origin_stock'
        });
        // this.belongsTo(models.OriginSale, {
        //   as: 'origin_sale'
        // });
    }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_STOCK_TABLE,
      modelName: 'ProductStock',
      timestamps: false
    }
  }
}


module.exports = { PRODUCT_STOCK_TABLE, ProductStockSchema, ProductStock }