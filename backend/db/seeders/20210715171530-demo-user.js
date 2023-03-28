'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
        {
            email: 'demo@user.io',
            username: 'Demo-lition',
            hashedPassword: bcrypt.hashSync('password'),
        },
        {
            email: 'hameJames@test.io',
            username: 'James',
            hashedPassword: bcrypt.hashSync('password'),
        },
        {
            email: 'whatsAnEmail@test.io',
            username: 'Julie',
            hashedPassword: bcrypt.hashSync('password'),
        },
        {
            email: 'rCobb@gmail.com',
            username: 'Roger',
            hashedPassword: bcrypt.hashSync('password'),
        },
        {
            email: 'thisKing@terror.com',
            username: 'Stephen',
            hashedPassword: bcrypt.hashSync('password'),
        },
        {
            email: 'jasonV@crystalLake.com',
            username: 'Jason',
            hashedPassword: bcrypt.hashSync('password'),
        },
        {
            email: 'inUrDreams@creepy.com',
            username: 'Freddy',
            hashedPassword: bcrypt.hashSync('password'),
        },
        {
            email: 'youAreSeen@stalking.com',
            username: 'Joe',
            hashedPassword: bcrypt.hashSync('password'),
        },
        {
            email: 'suchSights@puzzles.io',
            username: 'Elliott',
            hashedPassword: bcrypt.hashSync('password'),
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
        username: { [Op.in]: ['Demo-lition', 'James', 'Julie', 'Roger', 'Stephen', 'Jason', 'Freddy', 'Joe', 'Elliott'] }
    }, {});
  }
};
