const { Model, DataTypes, Sequelize } = require('sequelize');

const ORIGINSTOCK_TABLE = 'origin_stock';

const OriginStockSchema = {
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

class OriginStock extends Model {
  static associate(models) {
    // this.belongsToMany(models.Product, {
    //   foreignKey: 'origin_stock_id',
    //   otherKey: 'product_id',
    //   through: models.ProductStock,
    //   as: 'items'
    // })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORIGINSTOCK_TABLE,
      modelName: 'OriginStock',
      timestamps: false
    }
  }
}


module.exports = { ORIGINSTOCK_TABLE, OriginStockSchema, OriginStock }