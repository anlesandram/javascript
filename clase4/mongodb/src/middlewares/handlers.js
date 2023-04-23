const { response } = require('express');
errorMappers = require('./custom.exception').errorMappers

exports.errorLogger = (err, req, res, next) => {
    next(err);
}

exports.errorHandler = (err, req, res, next) => {
    console.log(err)
    if(err.statusCode){
        res.status(err.statusCode).json(err.message)
    }else{
        const serverError = new errorMappers.ServerError(err) 
        res.status(serverError.statusCode).json(serverError.message)
    }
}

exports.middleware = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        error ? next(new errorMappers.ValidationError(error)) : next()
    }
} 
