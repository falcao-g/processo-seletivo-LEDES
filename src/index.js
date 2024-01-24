const express = require('express');
const authRouter = require('./auth/auth.route');
const adminRouter = require('./admin/admin.route');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Cracha-LEDES!');
});

app.use('/auth', authRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado http://localhost:${port}`);
});
