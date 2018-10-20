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

// Render signup page
app.get('/signup', function(req, res){
    //var myContext = {};
    // myContext.showTimer = true;
    // myContext.bodyId = "classicalBody";
    // myContext.buttonId = "classicalButton";
    //res.render('signup', myContext);
    res.render('signup');
});

// Render login page
app.get('/login', function(req, res){
    res.render('login');
});

app.listen(app.get('port'), function(){
    console.log('Express started on local host!');
});
