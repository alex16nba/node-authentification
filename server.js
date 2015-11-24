'use strict';
var ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/index');
var isAuth = require('./middlewares/authentication');
/**
 * Set express (app) variables
 */
app.set('config', config);
app.set('root', __dirname);
app.set('env', ENV);


require('./config/mongoose').init(app);
require('./config/passport')(passport);
require('./config/express').init(app);

//use passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/login.js'));
app.use('/', require('./routes/register.js'));


app.get('/', isAuth.isAuthenticated, function(req, res) {
	if (req.session.user) {
		res.locals.user = req.session.user;
	}
  	res.render('dashboard.jade');
});

app.listen(4000, function() {
    console.log('listen on port ' + config.port);
});

