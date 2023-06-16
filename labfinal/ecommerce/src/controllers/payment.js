const transaction = require('../transaction/payment');
const httpStatus = require('http-status-codes')
const {StatusCodes} = httpStatus


exports.makePayment = async (req, res, next) => {
    const body = req.body;

    const paymentId = await transaction.makePayment(body, req.userId)
    res.status(StatusCodes.OK).json(paymentId)
}
