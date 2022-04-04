const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class ClientsService {

  constructor(){
    this.clients = [];
  }

  async create(data) {
    const newClient = await models.Client.create(data);
    return newClient;
  }

  async find() {
    const rta = await models.Client.findAll();
    return rta;
  }

  async findOne(id) {
    const client = await models.Client.findByPk(id);
    if(!client){
      throw boom.notFound('client not found');
    }
    return client;
  }

  async update(id, changes) {
    const client = await this.findOne(id);
    const rta = await client.update(changes);
    return rta;
    
  }

  async delete(id) {
    const client = await this.findOne(id);
    await client.destroy();
    return { id };
  }

}

module.exports = ClientsService;
