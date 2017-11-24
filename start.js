var path = require('path')
var fs = require('fs')

var express = require('express')

var app = express()
var http = require('http').Server(app)
var bodyParser = require('body-parser')

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
  	address: new_tale.address, lon: new_tale.lon, lat: new_tale.lat })
})

app.get('/get_tales', function(req, res) {
 /*
   "SELECT  id,
                  (6371 * acos( cos( radians($lat) ) * cos( radians('lat') ) *
                        cos( radians('lng') - radians($long)) +
                        sin(radians($lat)) * sin(radians('lat')) )
                  ) as distance
    FROM  map_locations
    HAVING  'distance' < 1
    ORDER BY  id
    LIMIT  25";
   */
})

http.listen(3000, function() { console.log('listening')});