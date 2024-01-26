const express = require('express');
const authenticateToken = require('../middleware/authentication');
const authenticateUserType = require('../middleware/administrator');

const router = express.Router();
const adminService = require('./admin.service');

router.post('/review', authenticateToken, authenticateUserType, adminService.changeSituation);
router.get('/requests', authenticateToken, authenticateUserType, adminService.listUserRequests);
router.post('/makeadmin', authenticateToken, authenticateUserType, adminService.makeAdmin);

module.exports = router;
