const { ServerError } = require('../mappers/custom.exception').errorMappers
const jwt = require("jsonwebtoken");

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

exports.isAuth = (req, res, next) => {
    // Tarea Clase 8. Leer README.md

    const token = req.headers.authorization;

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch(err) {
        console.log(err);
        res.status(401);
        res.send(err.message || 'Access forbidden');
        return;
    }

    console.log(decodedToken)
    if (decodedToken) {
        next();
    } else {
        res.status(401);
        res.send('Access forbidden');
        return;
    }
}
