var mqtt = require('mqtt')
var express = require('express')
var app = express()
var client  = mqtt.connect('mqtt://vernemq.verstraeten.io')

app.get('/indicativelight', function (req, res) {
  client.publish('indicativelight', 'on')
  res.send('send message to indicativelight')
})

app.listen(8080);
