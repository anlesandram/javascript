errorMappers = require('../mappers/custom.exception').errorMappers

exports.validateBody = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        error ? next(new errorMappers.ValidationError(error)) : next()
    }
}


exports.validateId = (schema, id) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.params[id]);
        error ? next(new errorMappers.ValidationError(error)) : next()
    }
} 