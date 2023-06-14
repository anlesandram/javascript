const transaction = require('../transaction/payment');
const httpStatus = require('http-status-codes')
const {StatusCodes} = httpStatus


exports.makePayment = async (req, res, next) => {
    const body = req.body;

    const payment = await transaction.makePayment(body)
    res.status(StatusCodes.OK).json()
}
