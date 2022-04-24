'use strict';

const { ShippingMethodSchema, SHIPPINGMETHOD_TABLE } = require('../models/shippingMethod.model');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(SHIPPINGMETHOD_TABLE, ShippingMethodSchema);
  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable(SHIPPINGMETHOD_TABLE);
  }
};
