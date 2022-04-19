const express = require('express');

const productsRouter = require('./products.router');
const customersRouter = require('./customer.router');
const shippingMethodRouter = require('./shippingMethod.router');
const orderRouter = require('./order.router');
const originSaleRouter = require('./originSale.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/customers', customersRouter);
  router.use('/shipping-method', shippingMethodRouter);
  router.use('/orders', orderRouter);
  router.use('/origin-sale', originSaleRouter);
}

module.exports = routerApi;
