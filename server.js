var express = require('express');
var app = express();

app.use("/assets", express.static(__dirname + "/assets"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index/dashboard page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// chatbot
app.get('/chatbot', function(req, res) {
    res.render('pages/chatbot');
  });


// navi
app.get('/navigation', function(req, res) {
  res.render('pages/navigation');
});


// bug
app.get('/bugrep', function(req, res) {
  res.render('pages/bugrep');
});

// announcement
app.get('/announcement', function(req, res) {
  res.render('pages/announcement');
});

// gamification
app.get('/gamification', function(req, res) {
  res.render('pages/gamification');
});

// voice
app.get('/voice', function(req, res) {
  res.render('pages/voice');
});

app.listen(8080);
console.log('Server is listening on port 8080');