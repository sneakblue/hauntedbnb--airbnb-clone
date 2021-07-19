'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hauntId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId'});

    Review.belongsTo(models.Haunt, { foreignKey: 'hauntId'});
  };
  return Review;
};
