'use strict';

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');

module.exports.init = function(app) {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(methodOverride());
	app.use(cookieParser());
	app.use(expressSession({
		secret: process.env.SESSION_SECRET || 'secret',
		resave: false,
		saveUninitialized: false
	}));
};
