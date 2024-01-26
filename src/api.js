const api = require('express')();
const express = require('express');
const path = require('path');
const authRouter = require('./auth/auth.route');
const userRouter = require('./user/user.route');
const adminRouter = require('./admin/admin.route');
require('dotenv').config();

api.use(express.json());

api.use(express.static(path.join(__dirname, '../public')));

api.use('/auth', authRouter);
api.use('/user', userRouter);
api.use('/admin', adminRouter);

module.exports = { api };
