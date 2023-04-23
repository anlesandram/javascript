const transaction = require('../util/transaction');
const httpStatus = require('http-status-codes')
const {StatusCodes} = httpStatus


exports.getProducts = async (_, res, next) => {
    const products = await transaction.readProducts()
    res.status(StatusCodes.OK).json(products)
}

exports.createProduct = async (req, res, next) => {
    const body = req.body;
    const { productId } = req.params;

    const product = await transaction.createProduct(body, productId)
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
