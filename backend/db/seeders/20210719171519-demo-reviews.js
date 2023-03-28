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
            userId: 4,
            hauntId: 1,
            review: 'Still have a feeling that someone followed me home...',
            rating: 6
        },
        {
            userId: 8,
            hauntId: 1,
            review: 'Will stay here again, maybe with more flashlights.',
            rating: 7
        },
        {
            userId: 9,
            hauntId: 1,
            review: 'Had some poltergeist activity with moving furniture!',
            rating: 10
        },
        {
            userId: 1,
            hauntId: 2,
            review: 'Lots of ghost activity, did not stay the whole night!',
            rating: 4
        },
        {
            userId: 2,
            hauntId: 2,
            review: 'Had a great time conversing with ghosts!',
            rating: 8
        },
        {
            userId: 5,
            hauntId: 2,
            review: 'Loved the stay overall, but my phone kept dying. Better it than me I suppose',
            rating: 7
        },
        {
            userId: 6,
            hauntId: 2,
            review: 'Surrounding area was much more beautiful than the place itself, just try not to get lost. Still looking for my friend here..',
            rating: 3
        },
        {
            userId: 2,
            hauntId: 3,
            review: 'Beautiful grounds with a nice pool, hard to sleep as knocking and some whispers were frequent.',
            rating: 9
        },
        {
            userId: 1,
            hauntId: 3,
            review: 'Will stay here again, maybe with more flashlights.',
            rating: 6
        },
        {
            userId: 6,
            hauntId: 3,
            review: 'Beautiful grounds with a nice pool, hard to sleep as knocking and some whispers were frequent.',
            rating: 9
        },
        {
            userId: 4,
            hauntId: 4,
            review: 'Would not reccommend bringing your kids...',
            rating: 2
        },
        {
            userId: 5,
            hauntId: 4,
            review: 'If you can stay here, you can live anywhere!',
            rating: 8
        },
        {
            userId: 8,
            hauntId: 4,
            review: 'The atmosphere of the place was great, even though we did not see any activity!',
            rating: 5
        },
        {
            userId: 1,
            hauntId: 5,
            review: 'Still have a feeling that someone followed me home...',
            rating: 8
        },
        {
            userId: 3,
            hauntId: 6,
            review: 'What was a great day turned into a pretty creepy night. Would not reccommend staying here unless you are braver than I!',
            rating: 6
        },
        {
            userId: 2,
            hauntId: 6,
            review: 'Had a great time conversing with ghosts!',
            rating: 8
        },
        {
            userId: 9,
            hauntId: 6,
            review: 'Lots of ghost activity, did not stay the whole night!',
            rating: 10
        },
        {
            userId: 5,
            hauntId: 6,
            review: 'Very quant and remote, definitely some ghost activity. Lots of footsteps can be heard during the night!',
            rating: 7
        },
        {
            userId: 1,
            hauntId: 7,
            review: 'Loved the stay overall, but my phone kept dying. Better it than me I suppose',
            rating: 6
        },
        {
            userId: 8,
            hauntId: 7,
            review: 'Had some poltergeist activity with moving furniture!',
            rating: 5
        },
        {
            userId: 4,
            hauntId: 8,
            review: 'Surrounding area was much more beautiful than the place itself, just try not to get lost. Still looking for my friend here..',
            rating: 5
        },
        {
            userId: 7,
            hauntId: 9,
            review: 'If you can stay here, you can live anywhere!',
            rating: 2
        },
        {
            userId: 4,
            hauntId: 9,
            review: 'Will stay here again, maybe with more flashlights.',
            rating: 6
        },
        {
            userId: 3,
            hauntId: 10,
            review: 'Very quant and remote, definitely some ghost activity. Lots of footsteps can be heard during the night!',
            rating: 2
        },
        {
            userId: 6,
            hauntId: 10,
            review: 'Had a great time conversing with ghosts!',
            rating: 6
        },
        {
            userId: 5,
            hauntId: 10,
            review: 'Would not reccommend bringing your kids...',
            rating: 9
        },
        {
            userId: 7,
            hauntId: 10,
            review: 'Had some poltergeist activity with moving furniture!',
            rating: 8
        },
        {
            userId: 9,
            hauntId: 10,
            review: 'Still have a feeling that someone followed me home...',
            rating: 10
        },
        {
            userId: 2,
            hauntId: 11,
            review: 'The atmosphere of the place was great, even though we did not see any activity!',
            rating: 6
        },
        {
            userId: 1,
            hauntId: 11,
            review: 'What was a great day turned into a pretty creepy night. Would not reccommend staying here unless you are braver than I!',
            rating: 10
        },
        {
            userId: 6,
            hauntId: 11,
            review: 'Beautiful grounds with a nice pool, hard to sleep as knocking and some whispers were frequent.',
            rating: 8
        },
        {
            userId: 9,
            hauntId: 12,
            review: 'Had a great time conversing with ghosts!',
            rating: 8
        },
        {
            userId: 4,
            hauntId: 12,
            review: 'Will stay here again, maybe with more flashlights.',
            rating: 4
        },
        {
            userId: 8,
            hauntId: 13,
            review: 'Had some poltergeist activity with moving furniture!',
            rating: 4
        },
        {
            userId: 1,
            hauntId: 13,
            review: 'If you can stay here, you can live anywhere!',
            rating: 8
        },
        {
            userId: 3,
            hauntId: 13,
            review: 'The atmosphere of the place was great, even though we did not see any activity!',
            rating: 9
        },
        {
            userId: 1,
            hauntId: 14,
            review: 'Surrounding area was much more beautiful than the place itself, just try not to get lost. Still looking for my friend here..',
            rating: 5
        },
        {
            userId: 6,
            hauntId: 14,
            review: 'Would not reccommend bringing your kids...',
            rating: 7
        },
        {
            userId: 6,
            hauntId: 15,
            review: 'Lots of ghost activity, did not stay the whole night!',
            rating: 10
        },
        {
            userId: 7,
            hauntId: 15,
            review: 'Very quant and remote, definitely some ghost activity. Lots of footsteps can be heard during the night!',
            rating: 6
        },
        {
            userId: 8,
            hauntId: 15,
            review: 'Still have a feeling that someone followed me home...',
            rating: 2
        },
        {
            userId: 1,
            hauntId: 16,
            review: 'Loved the stay overall, but my phone kept dying. Better it than me I suppose',
            rating: 3
        },
        {
            userId: 7,
            hauntId: 16,
            review: 'Will stay here again, maybe with more flashlights.',
            rating: 8
        },
        {
            userId: 4,
            hauntId: 17,
            review: 'What was a great day turned into a pretty creepy night. Would not reccommend staying here unless you are braver than I!',
            rating: 2
        },
        {
            userId: 6,
            hauntId: 17,
            review: 'Beautiful grounds with a nice pool, hard to sleep as knocking and some whispers were frequent.',
            rating: 6
        },
        {
            userId: 1,
            hauntId: 17,
            review: 'Lots of ghost activity, did not stay the whole night!',
            rating: 10
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
