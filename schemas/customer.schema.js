const Joi = require('joi');

const id = Joi.number();
const fullname = Joi.string();
const adress = Joi.string();
const commune = Joi.string();
const phone = Joi.string();
const email = Joi.string();
const instagram_user = Joi.string();

const createCustomerSchema = Joi.object({
  fullname: fullname.required(),
  adress: adress.required(),
  commune: commune.required(),
  phone: phone.required(),
  email: email.required(),
  instagram_user: instagram_user.required()
});

const updateCustomerSchema = Joi.object({
  fullname: fullname,
  adress: adress,
  commune: commune,
  phone: phone,
  email: email,
  instagram_user: instagram_user
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
