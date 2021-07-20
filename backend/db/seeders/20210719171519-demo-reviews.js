'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
        {
            userId: 1,
            hauntId: 1,
            review: 'Very quant and remote, definitely some ghost activity. Lots of footsteps can be heard during the night!',
            rating: 8
        },
        {
            userId: 1,
            hauntId: 2,
            review: 'Lots of ghost activity, did not stay the whole night!',
            rating: 4
        },
        {
            userId: 2,
            hauntId: 3,
            review: 'Beautiful grounds with a nice pool, hard to sleep as knocking and some whispers were frequent.',
            rating: 9
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
