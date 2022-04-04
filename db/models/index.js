const { Product, ProductSchema } = require('./product.model');
const { Client, ClientSchema } = require('./client.model');

function setupModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize));
    Client.init(ClientSchema, Client.config(sequelize));
}

module.exports = setupModels;