const transaction = require('../transaction/order');
const httpStatus = require('http-status-codes')
const pagination = require('../utils/pagination');
const { StatusCodes } = httpStatus


exports.getOrders = async (req, res, next) => {
    const { page = 1, limit = 100, sort = "asc", name } = req.query;

    const orders = await pagination.calculatePagination(transaction, page, limit, sort, name)
    return res
        .status(StatusCodes.OK)
        .json(orders)
}

exports.createOrder = async (req, res, next) => {
    const body = req.body;

    const orderId = await transaction.createOrder(body, req.userId)
    res.status(StatusCodes.OK).json(orderId)
}

exports.deleteOrder = async (req, res, next) => {
    const { orderId } = req.params;
    const order = await transaction.deleteOrder(orderId);

    res.status(StatusCodes.OK).json(`Order ${order.id} was removed`)
};

exports.getOrder = async (req, res, next) => {
    const { orderId } = req.params;
    const order = await transaction.getOrderByUserId(orderId, req.userId);

    res.status(StatusCodes.OK).json(order)
};