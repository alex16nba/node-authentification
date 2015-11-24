'use strict';
/*global require: false*/
/*global module: false*/

var express = require('express');
var router = express.Router();
var registerController = require('../controllers/register');

router.get('/register', registerController.getRegister);
router.post('/register', registerController.register);

module.exports = router;