const Sequelize = require('sequelize')
const sequelize = require('../db')

const tale = sequelize.define('tale', {
  taleContent: Sequelize.TEXT,
  lon: Sequelize.STRING,
  lat: Sequelize.STRING,
  create: Sequelize.DATE
});

module.exports = tale