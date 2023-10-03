const Sequelize = require('sequelize');
const config = require('./env');

// Set up the config

const sequelize = new Sequelize('test', 'root', '12345678', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  logging: false, 
  operatorsAliases: false, 
});

sequelize.authenticate();

module.exports = { sequelize, Sequelize };
