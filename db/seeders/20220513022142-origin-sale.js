'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('origin_sale', [
      {
        id: 1,
        name: 'Instagram',
        create_at: new Date()
      },
      {
        id: 2,
        name: 'Venta directa',
        create_at: new Date()
      },
      {
        id: 3,
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
