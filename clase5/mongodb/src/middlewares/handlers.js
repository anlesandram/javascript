const { ServerError } = require('../mappers/custom.exception').errorMappers

exports.errorLogger = (err, req, res, next) => {
    next(err);
}

exports.errorHandler = (err, req, res, next) => {
    if (err.statusCode) {
        res.status(err.statusCode).json(err.message)
    } else {
        const serverError = new ServerError(err)
        res.status(serverError.statusCode).json(serverError.message)
    }
}
