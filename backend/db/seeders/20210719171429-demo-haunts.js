'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Haunts', [
        {
            userId: 1,
            address: '',
            city: '',
            state: '',
            country: '',
            lat: 0.0,
            lng: 0.0,
            name: '',
            price: 0.0,
            activity: 1
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
