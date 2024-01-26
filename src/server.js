const { api } = require('./api');

const port = 8080;

api.listen(port, () => {
  console.log('Servidor iniciado http://localhost:8080');
});
