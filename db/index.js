const Sequelize = require('sequelize')
const sequelize = new Sequelize('realtale', 'realtale', 'pass', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.sync()

module.exports = sequelize