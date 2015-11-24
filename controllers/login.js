'use strict';

var passport = require('passport');

module.exports.getLogin = function(req, res) {
	res.render('login.jade', {error: req.session.errorMsg});
};

module.exports.login = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if (err || !user) {
			req.session.errorMsg = info.message || undefined;
			return res.redirect('/login');
		}

		req.logIn(user, function(err) {
			if (err) {
				return next(err);
			}
			req.session.user = user;

			req.session.errorMsg = undefined;
			res.redirect('/dashboard');
		});
	})(req, res, next);
};

module.exports.logout = function(req, res) {
	req.logout();
	res.redirect('/login');
};