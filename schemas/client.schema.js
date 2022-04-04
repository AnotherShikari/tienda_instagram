const Joi = require('joi');

const id = Joi.number();
const nombre_completo = Joi.string();
const direccion = Joi.string();
const comuna = Joi.number();
const telefono = Joi.number();
const email = Joi.number();
const usuario_instagram = Joi.string();

const createClientSchema = Joi.object({
  nombre_completo: nombre_completo.required(),
  direccion: direccion.required(),
  comuna: comuna.required(),
  telefono: telefono.required(),
  email: email.required(),
  usuario_instagram: usuario_instagram.required()
});

const updateClientSchema = Joi.object({
  nombre_completo: nombre_completo,
  direccion: direccion,
  comuna: comuna,
  telefono: telefono,
  email: email,
  usuario_instagram: usuario_instagram
});

const getClientSchema = Joi.object({
  id: id.required(),
});

module.exports = { createClientSchema, updateClientSchema, getClientSchema }
