'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Haunts', [
        {
            userId: 3,
            address: '123 Mountaintop Rd',
            city: 'Flόkalundur',
            state: 'Westfjords Region',
            country: 'Iceland',
            lat: 65.57655,
            lng: -23.16960,
            name: 'Red and White House',
            price: 169.99,
            activity: 6
        },
        {
            userId: 1,
            address: '1120 Westchester Pl',
            city: 'Los Angeles',
            state: 'California',
            country: 'USA',
            lat: 34.05000,
            lng: -118.32290,
            name: 'The Murder House',
            price: 229.99,
            activity: 10
        },
        {
            userId: 2,
            address: '329 Melrose Ave',
            city: 'Monrovia',
            state: 'California',
            country: 'USA',
            lat: 34.15829,
            lng: -118.00698,
            name: 'The Mills View House',
            price: 219.99,
            activity: 6
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Haunts', null, {});
  }
};
