const transaction = require('../transaction/order');
const httpStatus = require('http-status-codes')
const {StatusCodes} = httpStatus


exports.getOrders = async (_, res, next) => {
    const orders = await transaction.readOrders()
    res.status(StatusCodes.OK).json(orders)
}

exports.createOrder = async (req, res, next) => {
    const body = req.body;

    const order = await transaction.createOrder(body)
    res.status(StatusCodes.OK).json(order)
}

exports.deleteOrder = async (req, res, next) => {
    const { orderId } = req.params;
    const order = await transaction.deleteOrder(orderId);
    
    res.status(StatusCodes.OK).json( `Order ${order.id} was removed`)
};
 