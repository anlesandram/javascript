const transaction = require('../transaction/product');
const pagination = require('../utils/pagination');
const httpStatus = require('http-status-codes')

const { StatusCodes } = httpStatus


exports.getProducts = async (req, res, next) => {
    const { page = 1, limit = 100, sort = "asc", name } = req.query;

    const products = await pagination.calculatePagination(transaction, page, limit, sort, name)
    return res
        .status(StatusCodes.OK)
        .json(products)
}

exports.createProduct = async (req, res, next) => {
    const body = req.body;

    const product = await transaction.createProduct(body)
    res.status(StatusCodes.OK).json(product)
}

exports.updateProduct = async (req, res, next) => {
    const body = req.body;
    const { productId } = req.params;

    const products = await transaction.modifyProduct(body, productId)

    res.status(StatusCodes.OK).json(products)
}

exports.deleteProduct = async (req, res, next) => {
    const { productId } = req.params;
    const product = await transaction.deleteProduct(productId);
    const productRemoved = `Product ${product.name} was removed`

    res.status(StatusCodes.OK).json(productRemoved)
};

exports.retrieveProduct = async (req, res, next) => {
    const { productId } = req.params;
    const product = await transaction.retrieveProduct(productId);
    
    res.status(StatusCodes.OK).json(product)
};