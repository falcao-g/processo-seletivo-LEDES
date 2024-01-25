const express = require('express');
const authenticateToken = require('../middleware/adminAuthentication');

const router = express.Router();
const adminService = require('./admin.service');

router.post('/change-situation', authenticateToken, adminService.changeSituation);
router.get('/all-users', authenticateToken, adminService.alwaysUserAnalyse);

module.exports = router;
