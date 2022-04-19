const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class OriginSaleService {

  constructor(){
    this.origin = [];
  }

  async create(data) {
    const newOrigin = await models.OriginSale.create(data);
    return newOrigin;
  }

  async find() {
    const rta = await models.OriginSale.findAll();
    return rta;
  }

  async findOne(id) {
    const origin = await models.OriginSale.findByPk(id);
    if(!origin){
      throw boom.notFound('origin not found');
    }
    return client;
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

module.exports = OriginSaleService;
