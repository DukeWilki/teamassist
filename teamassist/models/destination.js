module.exports = function(sequelize, DataTypes) {
    var Cert = sequelize.define("Cert", {
      cert_name: DataTypes.STRING,
      record_type: DataTypes.BOOLEAN,
      authority: DataTypes.STRING
    }, {
      timestamps: false
    });
    return Cert;
  };
  