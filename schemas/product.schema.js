const Joi = require('joi');

const id = Joi.number();
const nombre = Joi.string();
const talla = Joi.string();
const cantidad = Joi.number();
const precio = Joi.number();
const marca = Joi.string();
const color = Joi.string();
const material = Joi.string();

const createProductSchema = Joi.object({
  nombre: nombre.required(),
  cantidad: cantidad.required(),
  precio: precio,
  talla: talla,
  marca: marca,
  color: color,
  material: material
});

const updateProductSchema = Joi.object({
  nombre: nombre,
  precio: precio,
  talla: talla,
  marca: marca,
  color: color,
  material: material
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
