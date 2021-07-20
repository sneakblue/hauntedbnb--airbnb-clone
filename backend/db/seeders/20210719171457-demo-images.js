'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
        {
            hauntId: 1,
            url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'
        },
        {
            hauntId: 2,
            url: 'https://static.wikia.nocookie.net/americanhorrorstory/images/b/bc/House.jpg/revision/latest/scale-to-width-down/625?cb=20111127211706'
        },
        {
            hauntId: 3,
            url: 'https://www.cultofweird.com/wp-content/uploads/2015/07/horror-movie-house-monrovia.jpg'
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
