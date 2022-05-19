const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class OriginStockService {

  constructor(){
    this.origin = [];
  }

  async create(data) {
    const newOrigin = await models.OriginStock.create(data);
    return newOrigin;
  }

  async find() {
    const rta = await models.OriginStock.findAll({
      include: ['items'],
    });
    return rta;
  }

  async findOne(id) {
    const origin = await models.OriginStock.findByPk(id);
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

module.exports = OriginStockService;
