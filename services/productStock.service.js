const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class ProductStockService {

  constructor(){
    this.origin = [];
  }

  async create(data) {
    const newOrigin = await models.ProductStock.create(data);
    return newOrigin;
  }

  async find() {
    const rta = await models.ProductStock.findAll({
     attributes:['id', 'product_id', 'origin_stock_id','amount', 'create_at']
    });
    return rta;
  }

  async findOne(id) {
    const origin = await models.ProductStock.findByPk(id,
      {
        attributes:['id', 'product_id', 'origin_stock_id','amount', 'create_at']
      }
    );
    if(!origin){
      throw boom.notFound('origin not found');
    }
    return origin;
  }

  async update(id, changes) {
    const origin = await this.findOne(id);
    const rta = await origin.update(changes);
    return rta;
    
  }

  async delete(id) {
    const origin = await this.findOne(id);
    await origin.destroy();
    return { id };
  }
}

module.exports = ProductStockService;
