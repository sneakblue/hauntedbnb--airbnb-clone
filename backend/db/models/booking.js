'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    hauntId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, { foreignKey: 'userId'});

    Booking.belongsTo(models.Haunt, { foreignKey: 'hauntId'});
  };
  return Booking;
};
