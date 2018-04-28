'use strict';
module.exports = (sequelize, DataTypes) => {
  var Spot = sequelize.define('Spot', {
    floor: DataTypes.INTEGER,
    occupency: DataTypes.BOOLEAN
  }, {});
  Spot.associate = function (models) {
    Spot.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    })
    // associations can be defined here
  };
  return Spot;
};