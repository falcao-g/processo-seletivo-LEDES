const express = require('express');

const router = express.Router();
const adminService = require('./admin.service');

router.post('/change-situation', adminService.changeSituation);


module.exports = router;
