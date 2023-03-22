const Joi = require('joi');

const id = Joi.number();
const productId = Joi.number();
const originStockId = Joi.number();
const amount = Joi.number();

const createProductStockSchema = Joi.object({
    productId: productId.required(),
    originStockId: originStockId.required(),
    amount: amount
});

const updateProductStockSchema = Joi.object({
    productId: productId.required(),
    originStockId: originStockId.required(),
    amount: amount.required()
});

const getProductStockSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductStockSchema, updateProductStockSchema, getProductStockSchema }
