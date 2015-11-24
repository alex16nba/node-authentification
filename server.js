'use strict';
var ENV = process.env.NODE_ENV || 'development';
var express = require('express');
var app = express();
var passport = require('passport');
var config = require('./config/index');
/**
 * Set express (app) variables
 */
app.set('config', config);
app.set('root', __dirname);
app.set('env', ENV);

require('./config/mongoose').init(app);
require('./config/passport')(passport);
require('./config/express').init(app);
require('./config/routes').init(app);

//use passport
app.use(passport.initialize());
app.use(passport.session());


app.listen(4000, function() {
    console.log('listen on port ' + config.port);
});

