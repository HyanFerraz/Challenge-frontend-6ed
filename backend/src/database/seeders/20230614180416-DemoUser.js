'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tickets', [{
      name: 'Demo',
      email: 'demo@example.com',
      password: '123456',
      cpf: '12345678901',
      ticket: '12345678901',
      birthday: '2021-06-14',
      createdAt: new Date(),
    }]);
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
