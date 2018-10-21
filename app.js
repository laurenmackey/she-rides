// Boilerplate to setup the app
var express = require("express");
var app = express()
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3030);

// Render homepage
app.get('/', function(req, res){
    res.render('home');
});

// Render login page
app.get('/login', function(req, res){
    res.render('login');
});

// Render scheduling page
app.get('/schedule', function(req, res){
    res.render('schedule');
});

// Render loading page
app.get('/loading', function(req, res){
    res.render('loading');
});

// Render match page
app.get('/match', function(req, res){
    res.render('match');
});

app.listen(app.get('port'), function(){
    console.log('Express started on local host!');
});
