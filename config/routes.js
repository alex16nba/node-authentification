'use strict';
var express = require('express');
var route = express.Route();
var isAuth = require('../middlewares/authentication');
module.exports.init = function(app) {
	app.get('/', function(req, res) {
		res.redirect('/login');
	});

	app.get('/dashboard', isAuth.isAuthenticated, function(req, res) {
		if (req.session.user) {
			res.locals.user = req.session.user;
		}
	  	res.render('dashboard.jade');
  });

	app.use('/', require('../routes/login.js'));
	app.use('/', require('../routes/register.js'));
};