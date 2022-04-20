const { Product, ProductSchema } = require('./product.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { OriginSale, OriginSaleSchema } = require('./originSale.model');
const { Order, OrderSchema } = require('./order.model');
const { ShippingMethod, ShippingMethodSchema } = require('./shippingMethod.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

function setupModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    OriginSale.init(OriginSaleSchema, OriginSale.config(sequelize));
    ShippingMethod.init(ShippingMethodSchema, ShippingMethod.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

    ShippingMethod.associate(sequelize.models);
    OriginSale.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Order.associate(sequelize.models);
    OrderProduct.associate(sequelize.models);
}

module.exports = setupModels;