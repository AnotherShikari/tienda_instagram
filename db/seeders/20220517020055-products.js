'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: 'Poleron 1',
        buy_price: 5000,
        sell_price: 17990,
        brand: 'Marca',
        size: 'XL',
        color: 'Naranja',
        material: 'Algodón',
        active: true,
        create_at: new Date()
      },
      {
        id: 2,
        name: 'Poleron 2',
        buy_price: 5000,
        sell_price: 17990,
        brand: 'Marca',
        size: 'XL',
        color: 'Naranja',
        material: 'Algodón',
        active: true,
        create_at: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
