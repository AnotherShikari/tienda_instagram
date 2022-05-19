const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();

const createOriginStockSchema = Joi.object({
  name: name.required()
});

const updateOriginStockSchema = Joi.object({
  name: name
});

const getOriginStockSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOriginStockSchema, updateOriginStockSchema, getOriginStockSchema }
