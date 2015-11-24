'use strict';
/*global require: false*/
/*global module: false*/
var passport = require('passport');
var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login');

router.get('/login', loginController.getLogin);
router.post('/login', loginController.login);
router.get('/logout', loginController.logout);


module.exports = router;