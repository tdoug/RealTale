var path = require('path')
var fs = require('fs')
const url = require('url')

var express = require('express')

var app = express()
var http = require('http').Server(app)
var bodyParser = require('body-parser')

var sequelize = require('./db')
var tale = require('./models/tale')

app.use('/vue', express.static('node_modules/vue/dist'))
app.use('/vue_resource', express.static('node_modules/vue-resource/dist'))
app.use('/public/javascripts', express.static('javascripts'))
app.use('/public/stylesheets', express.static('stylesheets'))
app.use('/google_maps', express.static('node_modules/google-maps/lib'))
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/go.html'));
})

app.post('/write_tale', function(req, res) {
  let new_tale = req.body
  tale.create({ content: new_tale.write_area, place_name: new_tale.place_name, 
  	address: new_tale.address, lon: new_tale.lon, lat: new_tale.lat }).then(tale => {
      if(tale)
        res.send(200)
    })
})

app.get('/get_tales', function(req, res) {
  const url_parts = url.parse(req.url, true)
  const queryString = url_parts.query

  const lat = queryString.lat
  const lon = queryString.lon
  // this is horribly incorrect, but it works for testing
  const query = 
  `SELECT *
  FROM tales
  WHERE (:lon > (:lon - 0.07) AND :lon < (:lon + 0.07))
  AND (:lat > (:lat - 0.07) AND :lat < (:lat + 0.07))`
  
  sequelize.query(query, 
  	{ replacements: { lat: lat, lon: lon }, 
  	type: sequelize.QueryTypes.SELECT }).then(tales => {
  		res.send(tales)
  	})
})

http.listen(3000, function() { console.log('listening')});