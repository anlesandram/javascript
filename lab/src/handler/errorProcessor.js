const errorLogger = (err, req, res, next) => {
    console.log(err);
    next(err);
}

const errorHandler = (err, req, res, next) => {
    res.status(400).json({
        message: err.message,
    })
}

module.exports.errorLogger = errorLogger;
module.exports.errorHandler = errorHandler;