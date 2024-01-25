const DEFAULT_ERROR_MESSAGE = 'Um erro de validação ocorreu';
const BAD_REQUEST = 400;

function ValidationError(message = DEFAULT_ERROR_MESSAGE, httpStatus = BAD_REQUEST) {
  this.name = 'ValidationError';
  this.message = message;
  this.httpStatus = httpStatus;
}

module.exports = { ValidationError };
