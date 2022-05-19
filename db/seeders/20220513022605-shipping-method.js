'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('shipping_method', [
      {
        id: 1,
        name: 'Starken',
        create_at: new Date()
      },
      {
        id: 2,
        name: 'Correos de Chile',
        create_at: new Date()
      },
      {
        id: 3,
        name: 'Escargo',
        create_at: new Date()
      },
      {
        id: 4,
        name: 'Gallo negro',
        create_at: new Date()
      },
      {
        id: 5,
        name: 'Retiro en casa',
        create_at: new Date()
      },
      {
        id: 6,
        name: 'Papá',
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
