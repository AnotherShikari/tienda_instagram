const { Model, DataTypes, Sequelize } = require('sequelize');

const ORIGINSALE_TABLE = 'origin_sale';

const OriginSaleSchema = {
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

class OriginSale extends Model {
  static associate(models) {
    this.hasMany(models.Order, {
        as: 'orders',
        foreignKey:'originSaleId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORIGINSALE_TABLE,
      modelName: 'OriginSale',
      timestamps: false
    }
  }
}


module.exports = { ORIGINSALE_TABLE, OriginSaleSchema, OriginSale }