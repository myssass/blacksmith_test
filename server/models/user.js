'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {});
  User.associate = function (models) {
    User.hasOne(models.Spot, {
      foreignKey: 'user_id',
      as: 'Spot',
    })
    // associations can be defined here
  };
  return User;
};