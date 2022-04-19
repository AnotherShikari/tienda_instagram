const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();

const createShippingMethodSchema = Joi.object({
  name: name.required()
});

const updateShippingMethodSchema = Joi.object({
  name: name
});

const getShippingMethodSchema = Joi.object({
  id: id.required(),
});

module.exports = { createShippingMethodSchema, updateShippingMethodSchema, getShippingMethodSchema }
