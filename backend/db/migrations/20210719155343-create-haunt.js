'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Haunts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      country: {
          allowNull: false,
          type: Sequelize.STRING(256)
      },
      lat: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      lng: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      activity: {
          allowNull: false,
          type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Haunts');
  }
};
