const express = require('express');

const router = express.Router();
const adminService = require('./admin.service');

router.post('/change-situation', adminService.changeSituation);
router.get('/all-users', adminService.alwaysUserAnalyse);


module.exports = router;
