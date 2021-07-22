'use strict';
module.exports = (sequelize, DataTypes) => {
  const Haunt = sequelize.define('Haunt', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lat: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    lng: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    activity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {});
  Haunt.associate = function(models) {
    Haunt.belongsTo(models.User, { foreignKey: 'userId' });

    Haunt.hasMany(models.Review, { foreignKey: 'hauntId' });

    Haunt.hasMany(models.Booking, { foreignKey: 'hauntId' });

    Haunt.hasMany(models.Image, { foreignKey: 'hauntId' });
  };
  return Haunt;
};
