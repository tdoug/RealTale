var path = require('path')
var fs = require('fs')

var express = require('express')

var app = express()
var http = require('http').Server(app)
var bodyParser = require('body-parser')

app.use('/vue', express.static('node_modules/vue/dist'))
app.use('/google_maps', express.static('node_modules/google-maps/lib'))
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/go.html'));
});

http.listen(3000, function() { console.log('listening')});