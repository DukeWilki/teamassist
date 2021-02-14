module.exports = function (sequelize, DataTypes) {
  var Cert = sequelize.define(
    "Cert",
    {
      certname: DataTypes.STRING,
      recordtype: DataTypes.STRING,
      authority: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Cert;
};
