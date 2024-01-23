const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Cracha-LEDES!');
});

app.listen(port, () => {
  console.log(`Servidor iniciado http://localhost:${port}`);
});
