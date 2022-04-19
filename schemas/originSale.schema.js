const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();

const createOriginSaleSchema = Joi.object({
  name: name.required()
});

const updateOriginSaleSchema = Joi.object({
  name: name
});

const getOriginSaleSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOriginSaleSchema, updateOriginSaleSchema, getOriginSaleSchema }
