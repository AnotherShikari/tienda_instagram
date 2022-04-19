const { Model, DataTypes, Sequelize } = require('sequelize');

const SHIPPINGMETHOD_TABLE = 'shipping_method';

const ShippingMethodSchema = {
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class ShippingMethod extends Model {
  static associate(models) {
    this.hasMany(models.Order, {
        as: 'orders',
        foreignKey: 'shippingMethodId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SHIPPINGMETHOD_TABLE,
      modelName: 'ShippingMethod',
      timestamps: false
    }
  }
}


module.exports = { SHIPPINGMETHOD_TABLE, ShippingMethodSchema, ShippingMethod }