"use strict";

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql')


const basename = path.basename(module.filename);
const config = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'Queenw00d.',
  database: process.env.DB_NAME || 'teamassist',
  host: process.env.DB_HOSTNAME || 'localhost',
  port: process.env.DB_PORT || 3306,
};
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// JOINING TABLES FOR MEMBER
db.Member.hasMany(db.Record, { foreignKey: 'member_id' })
db.Record.belongsTo(db.Member, { foreignKey: 'member_id' })


// // JOINING TABLES FOR CERT
db.Cert.hasMany(db.Record, { foreignKey: 'cert_id' })
db.Record.belongsTo(db.Cert, { foreignKey: 'cert_id' })


sequelize.sync()

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
