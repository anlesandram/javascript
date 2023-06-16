const transaction = require('../transaction/cart');
const httpStatus = require('http-status-codes')
const { StatusCodes } = httpStatus


exports.getCarts = async (_, res, next) => {
    const carts = await transaction.readCarts()
    res.status(StatusCodes.OK).json(carts)
}

exports.createCart = async (req, res, next) => {
    const cartId = await transaction.createCart()
    res.status(StatusCodes.OK).json(cartId)
}

exports.updateCartItems = async (req, res, next) => {
    const body = req.body;
    const { cartId } = req.params;

    const cart = await transaction.updateCartItems(cartId, body)
    res.status(StatusCodes.OK).json(cart)
}

exports.deleteCart = async (req, res, next) => {
    const { cartId } = req.params;
    const cart = await transaction.deleteCart(cartId);

    res.status(StatusCodes.OK).json(`Cart ${cartId} was removed`)
};

exports.getCart = async (req, res, next) => {
    const { cartId } = req.params;
    const cart = await transaction.retrieveCart(cartId);

    res.status(StatusCodes.OK).json(cart)
};