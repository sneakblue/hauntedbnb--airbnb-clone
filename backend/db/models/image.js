'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    hauntId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Haunt, { foreignKey: 'hauntId'});
    
  };
  return Image;
};
