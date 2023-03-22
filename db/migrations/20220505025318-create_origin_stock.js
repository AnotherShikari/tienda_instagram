'use strict';

const { OriginStockSchema, ORIGINSTOCK_TABLE } = require('../models/originStock.model');
const { ProductStockSchema, PRODUCT_STOCK_TABLE } = require('../models/productStock.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORIGINSTOCK_TABLE, OriginStockSchema);
    await queryInterface.createTable(PRODUCT_STOCK_TABLE, ProductStockSchema);
  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable(ORIGINSALE_TABLE);
  }
};
