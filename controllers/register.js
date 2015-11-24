'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var registerField = ['firstName', 'lastName', 'email', 'password'];

module.exports.getRegister = function(req, res) {
  res.render('register.jade' , {error: req.session.errorMsg });
};

module.exports.register = function(req, res, next) {
  var userData = _.pick(req.body, registerField);

  if (!req.body.email) {
    req.session.errorMsg = 'Email is required';
    return res.redirect('register');
  }

  if (!req.body.password) {
    req.session.errorMsg = 'Password is required.';
    return res.redirect('register');
  }

  User.register(userData, function(err, user) {
    if (err && (11000 === err.code || 11001 === err.code)) {
      req.session.errorMsg = 'E-mail is already in use.';
      return res.redirect('register');
    }

    if (err) {
      req.session.errorMsg = 'Something went wrong, please try later.';
      return res.redirect('register');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      req.session.user = user;
      req.session.errorMsg = undefined;
      res.redirect('/dashboard');
    });
  });
};