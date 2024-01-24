const DEFAULT_ERROR_MESSAGE = 'Um erro de validação ocorreu';
const BAD_REQUEST = 400;

function ValidationError(message = DEFAULT_ERROR_MESSAGE) {
  this.name = 'ValidationError';
  this.message = message;
  this.httpStatus = BAD_REQUEST;
}

module.exports = { ValidationError };
