'use strict';
var User = require('../models/user');

module.exports = function(passport) {
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
  	done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
  	User.findById(id, done);
  });

  require('./strategies/local')();
};