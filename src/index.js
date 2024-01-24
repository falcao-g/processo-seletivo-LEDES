const express = require('express');
const authRouter = require('./auth/auth.route');
const authService = require("./auth/auth.service");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Cracha-LEDES!');
});

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado http://localhost:${port}`);
});


app.post('/signup', authService.signup);
app.post('/login', authService.login);