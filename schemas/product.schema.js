const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();
const amount = Joi.number();
const buy_price = Joi.number();
const sell_price = Joi.number();
const brand = Joi.string().optional().allow('');
const size = Joi.string().optional().allow('');
const color = Joi.string().optional().allow('');
const material = Joi.string().optional().allow('');
const active = Joi.boolean();

const createProductSchema = Joi.object({
  name: name.required(),
  amount: amount.required(),
  buy_price: buy_price.required(),
  sell_price: sell_price.required(),
  size: size,
  brand: brand,
  color: color,
  material: material
});

const updateProductSchema = Joi.object({
  name: name,
  buy_price: buy_price,
  sell_price: sell_price,
  amount: amount,
  size: size,
  brand: brand,
  color: color,
  material: material,
  active: active
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
