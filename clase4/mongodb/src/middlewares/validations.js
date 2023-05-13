errorMappers = require('../mappers/custom.exception').errorMappers

exports.validateBody = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        error ? next(new errorMappers.ValidationError(error)) : next()
    }
} 

exports.validateId = (schema) => {
    return (req, res, next) => {
        const { productId } = req.params;
        const { error, value } = schema.validate(productId);
        error ? next(new errorMappers.ValidationError(error)) : next()
    }
} 