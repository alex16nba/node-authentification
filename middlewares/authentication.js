'use strict';

module.exports.isAuthenticated = function(req, res, next) {
	if (req.user) {
		return next();
	}

	res.json({ message: 'Unauthorized' });
}; 