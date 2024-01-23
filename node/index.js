const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Cracha-LEDES!');
});

app.listen(port, () => {
    console.log(`servidor iniciado http://localhost:${port}`);
});