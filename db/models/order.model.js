const { Model, DataTypes, Sequelize } = require('sequelize');

const { SHIPPINGMETHOD_TABLE } = require('./shippingMethod.model');
const { ORIGINSALE_TABLE } = require('./originSale.model');
const { CUSTOMER_TABLE } = require('./customer.model');

const ORDER_TABLE = 'order';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
    field: 'customer_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references:{
        model: CUSTOMER_TABLE,
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  direction:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  commune:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  comment:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  shippingMethodId:{
    field: 'shipping_method_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
        model: SHIPPINGMETHOD_TABLE,
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  tracking_code:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  originSaleId:{
    field: 'origin_sale_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
        model: ORIGINSALE_TABLE,
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  // total_price:{
  //   type: DataTypes.VIRTUAL,
  //   get(){
  //     if(this.items.length > 0){
  //       return this.items.reduce((total, item) => {
  //         return total + (item.sell_price * item.OrderProduct.amount);
  //       }, 0);
  //     }
  //     return 0;
  //   }
  // },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Order extends Model {
    static associate(models) {
        this.belongsTo(models.ShippingMethod, {
          as: 'shipping_method'
        });
        this.belongsTo(models.Customer, {
          as: 'customer'
        });
        this.belongsTo(models.OriginSale, {
          as: 'origin_sale'
        });
        this.belongsToMany(models.Product, {
          as: 'items',
          through: models.OrderProduct,
          foreignKey: 'orderId',
          otherKey: 'productId'
        })
    }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}


module.exports = { ORDER_TABLE, OrderSchema, Order }