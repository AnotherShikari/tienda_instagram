const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ShippingMethodService {

  constructor(){
    this.shippingMethod = [];
  }

  async create(data) {
    const newOrigin = await models.ShippingMethod.create(data);
    return newOrigin;
  }

  async find() {
    const rta = await models.ShippingMethod.findAll();
    return rta;
  }

  async findOne(id) {
    const shippingMethod = await models.ShippingMethod.findByPk(id, {
      include: ['orders']
    });
    if(!shippingMethod){
      throw boom.notFound('shipping method not found');
    }
    return shippingMethod;
  }

  async update(id, changes) {
    const shippingMethod = await this.findOne(id);
    const rta = await shippingMethod.update(changes);
    return rta;
    
  }

  async delete(id) {
    const shippingMethod = await this.findOne(id);
    await shippingMethod.destroy();
    return { id };
  }

}

module.exports = ShippingMethodService;
