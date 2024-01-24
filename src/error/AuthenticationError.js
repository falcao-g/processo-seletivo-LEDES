const DEFAULT_ERROR_MESSAGE = 'Você não tem autorização para fazer isso.';
const UNAUTHORIZED = 401;

function AuthenticationError(message = DEFAULT_ERROR_MESSAGE, httpStatus = UNAUTHORIZED) {
  this.name = 'AuthenticationError';
  this.message = message;
  this.httpStatus = httpStatus;
}

module.exports = { AuthenticationError };
