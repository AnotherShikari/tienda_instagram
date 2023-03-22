const { Product, ProductSchema } = require('./product.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { OriginSale, OriginSaleSchema } = require('./originSale.model');
const { Order, OrderSchema } = require('./order.model');
const { ShippingMethod, ShippingMethodSchema } = require('./shippingMethod.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');
const { OriginStock, OriginStockSchema } = require('./originStock.model');
const { ProductStock, ProductStockScheme } = require('./productStock.model');

function setupModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    OriginSale.init(OriginSaleSchema, OriginSale.config(sequelize));
    ShippingMethod.init(ShippingMethodSchema, ShippingMethod.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
    OriginStock.init(OriginStockSchema, OriginStock.config(sequelize));
    ProductStock.init(ProductStockScheme, ProductStock.config(sequelize));

    ShippingMethod.associate(sequelize.models);
    OriginSale.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Order.associate(sequelize.models);
    OrderProduct.associate(sequelize.models);
    OriginStock.associate(sequelize.models);
    ProductStock.associate(sequelize.models);
}

module.exports = setupModels;