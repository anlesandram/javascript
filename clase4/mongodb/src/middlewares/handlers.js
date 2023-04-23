exports.errorLogger = (err, req, res, next) => {
    next(err);
}

exports.errorHandler = (err, req, res, next) => {
    res.status(400).json({
        message: err.message,
    })
}

exports.middleware = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        error ? next(new Error(error)) : next()
    }
} 
