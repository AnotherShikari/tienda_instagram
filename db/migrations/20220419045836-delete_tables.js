'use strict';

const { OrderProductSchema, ORDER_PRODUCT_TABLE } = require('../models/order-product.model');
const { OrderSchema, ORDER_TABLE } = require('../models/order.model');
const { ShippingMethodSchema, SHIPPINGMETHOD_TABLE } = require('../models/shippingMethod.model');
const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customer.model');
const { OriginSaleSchema, ORIGINSALE_TABLE } = require('./../models/originSale.model');
const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');



module.exports = {
  up: async (queryInterface) => {
    
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(ORIGINSALE_TABLE);
    await queryInterface.dropTable(SHIPPINGMETHOD_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
