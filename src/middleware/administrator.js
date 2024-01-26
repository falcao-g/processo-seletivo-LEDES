const { AuthenticationError } = require('../error/AuthenticationError');

function authenticateUserType(req, res, next) {
  try {
    if (req.user.type !== 'ADMIN') {
      throw new AuthenticationError('Apenas administradores podem ter acesso!');
    }
    next();
  } catch (err) {
    res.status(err.httpStatus ?? 500).send({ message: err.message });
  }
}

module.exports = authenticateUserType;
