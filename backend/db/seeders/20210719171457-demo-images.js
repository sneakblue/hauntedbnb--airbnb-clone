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
        {
            hauntId: 4,
            url: 'https://www.tripsavvy.com/thmb/5qjq9nYRsfOobZBJV9nSoQm7nLo=/3865x2576/filters:fill(auto,1)/winchester-mystery-house-583683432-581cbbf55f9b581c0b4ac1a8.jpg'
        },
        {
            hauntId: 5,
            url: 'https://cdn.history.com/sites/2/2017/08/GettyImages-148641024.jpg'
        },
        {
            hauntId: 6,
            url: 'http://www.americas-most-haunted.com/wp-content/uploads/2017/11/villisca-ax-murder-house.jpg'
        },
        {
            hauntId: 7,
            url: 'https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2020/10/cave-1-700x525.jpg'
        },
        {
            hauntId: 8,
            url: 'https://cdn.s3-media.wbal.com/Media/2018/05/22/354adf80-9367-41b4-88da-fd16b9e1df50/original.jpg'
        },
        {
            hauntId: 9,
            url: 'https://visitatchison.com/wp-content/uploads/2020/05/AtchisonChamber-17.jpg'
        },
        {
            hauntId: 10,
            url: 'https://i.redd.it/kef5ok6o6ewz.jpg'
        },
        {
            hauntId: 11,
            url: 'https://static2.therichestimages.com/wordpress/wp-content/uploads/2014/04/Biltmore-EstateAsheville-North-Carolina.jpg'
        },
        {
            hauntId: 12,
            url: 'https://www.historichouses.org/app/uploads/2021/02/raynham-hall-1.jpg'
        },
        {
            hauntId: 13,
            url: 'https://www.historicmysteries.com/wp-content/uploads/2017/11/poveglia-octagon-1024x557.jpg'
        },
        {
            hauntId: 14,
            url: 'https://cdn.getyourguide.com/img/location/58c6a43a05a64.jpeg/88.jpg'
        },
        {
            hauntId: 15,
            url: 'https://eyeoftheflyer.com/wp-content/uploads/2020/04/queen-mary-ship-2048x1307.jpg'
        },
        {
            hauntId: 16,
            url: 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178314/Casa-Loma-49150.jpg'
        },
        {
            hauntId: 17,
            url: 'http://trv-checkin.s3-eu-central-1.amazonaws.com/wp-content/uploads/sites/10/2014/10/The-Stanley.jpg'
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
