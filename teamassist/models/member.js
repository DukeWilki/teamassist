const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    firstname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    dob: {type: DataTypes.STRING},
    gender: {type: DataTypes.STRING},
    iscommittee: {type: DataTypes.STRING},
    iscoach: {type: DataTypes.BOOLEAN},
    isactive: {type: DataTypes.BOOLEAN, defaultValue: true}
  }, {
    timestamps: false
  }); 
  return Member;
};
