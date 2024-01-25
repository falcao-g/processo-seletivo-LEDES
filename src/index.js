const express = require('express');
const path = require('path');
const authRouter = require('./auth/auth.route');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Cracha-LEDES!');
});

app.get('/error', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'error', 'error.html'));
});

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado http://localhost:${port}`);
});
