const Joi = require('joi');

const id = Joi.number();
const nombre = Joi.string();
const talla = Joi.string();
const cantidad = Joi.number();
const precio_compra = Joi.number();
const precio_venta = Joi.number();
const marca = Joi.string();
const color = Joi.string();
const material = Joi.string();
const activo = Joi.boolean();

const createProductSchema = Joi.object({
  nombre: nombre.required(),
  cantidad: cantidad.required(),
  precio_compra: precio_compra,
  precio_venta: precio_venta,
  talla: talla,
  marca: marca,
  color: color,
  material: material
});

const updateProductSchema = Joi.object({
  nombre: nombre,
  precio_compra: precio_compra,
  precio_venta: precio_venta,
  talla: talla,
  marca: marca,
  color: color,
  material: material,
  activo: activo
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
