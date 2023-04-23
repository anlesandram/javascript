exports.errorLogger = (err, req, res, next) => {
    next(err);
}

exports.errorHandler = (err, req, res, next) => {
    console.log("entro")
    res.status(400).json({
        message: err.message,
    })
}