const Sequelize = require('sequelize')
const sequelize = new Sequelize('realtale', 'realtale', 'pass', {
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
});

sequelize.sync()

module.exports = sequelize