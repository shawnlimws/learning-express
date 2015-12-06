var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var fetch = require('node-fetch')
var bodyParser = require('body-parser')

// Support JSON encoded bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Start Server
app.listen(port)
console.log('magic happening on ' + port)

// Combined Class
app.get('/participants', function (req, res) {
  fetch('https://raw.githubusercontent.com/jsstrn/ga-wdi-class/gh-pages/js/data.json')
    .then(data => data.json())
    .then(participants => (participants.instructors.concat(participants.students)))
    .then(combined => res.send(combined))
})

// Create participants
app.post('/participants', function (req, res) {
  console.log(req.body)
})
