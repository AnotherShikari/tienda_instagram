'use strict';

const { ClientSchema, CLIENT_TABLE } = require('./../models/client.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CLIENT_TABLE, ClientSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CLIENT_TABLE);
  }
};
