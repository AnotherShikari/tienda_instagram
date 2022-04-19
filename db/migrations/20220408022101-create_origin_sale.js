'use strict';

const { OriginSaleSchema, ORIGINSALE_TABLE } = require('./../models/originSale.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORIGINSALE_TABLE, OriginSaleSchema);
  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable(ORIGINSALE_TABLE);
  }
};
