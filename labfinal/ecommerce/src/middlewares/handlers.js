const { ServerError } = require('../mappers/custom.exception').errorMappers
const jwt = require("jsonwebtoken");

exports.errorLogger = (err, req, res, next) => {
    next(err);
}

exports.errorHandler = (err, req, res, next) => {
    if (err.statusCode) {
        console.log(err)
        res.status(err.statusCode).json(err.message)
    } else {
        console.log(err)
        const serverError = new ServerError(err)
        res.status(serverError.statusCode).json(serverError.message)
    }
}

exports.isAuthGuest = (req, res, next) => {
    const token = req.headers.authorization;
    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch(err) {
        res.status(401);
        res.send(err.message || 'Access forbidden');
        return;
    }

    const user = decodedToken.user 
    if (user.role === 'guest') {
        next();
    } else {
        res.status(401);
        res.send('Access forbidden');
        return;
    }
}

exports.isAuthGuest = (req, res, next) => {
    const token = req.headers.authorization;
    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch(err) {
        res.status(401);
        res.send(err.message || 'Access forbidden');
        return;
    }

    const user = decodedToken.user 
    if (user.role === 'guest' || user.role === 'admin') {
        req.userId = user._id
        next();
    } else {
        res.status(401);
        res.send('Access forbidden');
        return;
    }
}

exports.isAuthAdmin = (req, res, next) => {
    const token = req.headers.authorization;
    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch(err) {
        res.status(401);
        res.send(err.message || 'Access forbidden');
        return;
    }

    const user = decodedToken.user 
    if (user.role === 'admin') {
        req.userId = user._id
        next();
    } else {
        res.status(401);
        res.send('Access forbidden');
        return;
    }
}