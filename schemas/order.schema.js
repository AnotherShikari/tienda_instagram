const Joi = require('joi');

const id = Joi.number();
const customerId = Joi.number();
const direction = Joi.string();
const commune = Joi.string();
const brand = Joi.string();
const comment = Joi.string();
const shippingMethodId = Joi.number();
const tracking_code = Joi.string();
const originSaleId = Joi.number();
const total_price = Joi.number();

const createOrderSchema = Joi.object({
  customerId: customerId,
  direction: direction,
  commune: commune,
  brand: brand,
  comment: comment,
  shippingMethodId: shippingMethodId.required(),
  tracking_code: tracking_code,
  originSaleId: originSaleId.required(),
  total_price: total_price.required()
});


const updateOrderSchema = Joi.object({
  customerId: customerId,
  direction: direction,
  commune: commune,
  brand: brand,
  comment: comment,
  shippingMethodId: shippingMethodId,
  tracking_code: tracking_code,
  originSaleId: originSaleId,
  total_price: total_price
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema }
