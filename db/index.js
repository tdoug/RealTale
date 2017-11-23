const Sequelize = require('sequelize');
const sequelize = new Sequelize('realtale', 'realtale', 'pass', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize