const Sequelize = require('sequelize')
const sequelize = require('../db')

const tale = sequelize.define('tale', {
  content: Sequelize.TEXT,
  address: Sequelize.STRING,
  place_name: Sequelize.STRING,
  lat: Sequelize.STRING,
  lon: Sequelize.STRING
});

module.exports = tale