const { Model, DataTypes, Sequelize } = require('sequelize');

const CLIENT_TABLE = 'clients';

const ClientSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre_completo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  comuna: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  telefono: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  usuario_instagram: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

class Client extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: 'Client',
      timestamps: false
    }
  }
}


module.exports = { CLIENT_TABLE, ClientSchema, Client }