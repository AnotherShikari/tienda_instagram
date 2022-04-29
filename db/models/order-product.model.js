const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./product.model');
const { ORDER_TABLE } = require('./order.model');

const ORDER_PRODUCT_TABLE = 'orders_products';

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references:{
        model: ORDER_TABLE,
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  buy_price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  sell_price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class OrderProduct extends Model {
    static associate(models) {
        // this.belongsTo(models.ShippingMethod, {
        //   as: 'shipping_method'
        // });
        // this.belongsTo(models.Customer, {
        //   as: 'customer'
        // });
        // this.belongsTo(models.OriginSale, {
        //   as: 'origin_sale'
        // });
    }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamps: false
    }
  }
}


module.exports = { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct }