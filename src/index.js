const express = require('express');
const path = require('path');
const authRouter = require('./auth/auth.route');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado http://localhost:${port}`);
});
