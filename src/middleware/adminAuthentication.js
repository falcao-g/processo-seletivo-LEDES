const { AuthenticationError } = require('../error/AuthenticationError');
const authenticateToken = require('./authentication');

function ehAdmin(req, res, next) {
  authenticateToken(req, res, next);
  try {
    if (req.user.type !== 'ADMIN') {
      throw new AuthenticationError('Apenas administradores podem ter acesso!');
    }
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

module.exports = ehAdmin;
