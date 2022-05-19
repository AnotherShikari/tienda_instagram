'use strict';

const { OriginStockSchema, ORIGINSTOCK_TABLE } = require('../models/originStock.model');
const { ProductOriginStockSchema, PRODUCT_ORIGIN_STOCK_TABLE } = require('../models/product-origin-stock.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORIGINSTOCK_TABLE, OriginStockSchema);
    await queryInterface.createTable(PRODUCT_ORIGIN_STOCK_TABLE, ProductOriginStockSchema);
  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable(ORIGINSALE_TABLE);
  }
};
