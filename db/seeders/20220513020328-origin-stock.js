'use strict';
const { OriginStockSchema, ORIGINSTOCK_TABLE } = require('../models/originStock.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(ORIGINSTOCK_TABLE, [
      {
        id: 1,
        name: 'Evento 1',
        create_at: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
