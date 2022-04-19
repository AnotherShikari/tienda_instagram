'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');
const { OrderProductSchema, ORDER_PRODUCT_TABLE } = require('../models/order-product.model');
const { OrderSchema, ORDER_TABLE } = require('../models/order.model');



module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  down: async (queryInterface) => {
  }
};
