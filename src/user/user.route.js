const express = require('express');
const authenticateToken = require('../middleware/authentication');

const router = express.Router();
const userService = require('./user.service');

router.get('/', authenticateToken, userService.getUser);
router.put('/', authenticateToken, userService.editUser);

module.exports = router;
