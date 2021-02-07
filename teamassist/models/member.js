const bcrypt = require("bcryptjs");


module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
  }, {
    timestamps: false
  }); 
  return Member;
};
