const express = require('express');

const router = express.Router();
const authService = require('./auth.service');

router.post('/signup', authService.signup);
router.post('/login', authService.login);

module.exports = router;
