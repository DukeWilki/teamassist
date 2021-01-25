module.exports = function (sequelize, DataTypes) {
  var Record = sequelize.define(
    "Record",
    {
      member_id: DataTypes.INTEGER,
      cert_id: DataTypes.INTEGER,
      auth_id: DataTypes.INTEGER,
      auth_date: DataTypes.DATE, //timestamp
      completed: DataTypes.DATE,
      expdate: DataTypes.DATE,
    },
    {
      hooks: {
        beforeCreate(record, options) {
          record.auth_date = new Date();
        },
      },
      timestamps: false,
    }
  );
  return Record;
};
