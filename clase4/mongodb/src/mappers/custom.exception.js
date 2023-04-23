const httpStatus = require('http-status-codes')
const { StatusCodes } = httpStatus


class ValidationError extends Error {

  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

class NotFoundError extends Error {

  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

class ServerError extends Error {

  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

exports.errorMappers = {
  ValidationError: ValidationError,
  NotFoundError: NotFoundError,
  ServerError: ServerError
}
