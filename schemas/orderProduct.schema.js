const Joi = require('joi');

const productId = Joi.number();
const orderId = Joi.number();
const sell_price = Joi.number();
const buy_price = Joi.number();
const amount = Joi.number();


const addItemSchema = Joi.object({
  productId: productId,
  orderId: orderId,
  sell_price: sell_price,
  buy_price: buy_price,
  amount: amount
});

module.exports = { addItemSchema }
