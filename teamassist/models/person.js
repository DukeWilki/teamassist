const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.STRING,
    iscommittee: DataTypes.BOOLEAN,
    iscoach: DataTypes.BOOLEAN,
    isactive: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Member.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Member.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Member;
};
