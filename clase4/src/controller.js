const transaction = require('./transaction');


exports.getProducts = async (_, res, next) => {
    const products = await transaction.readProducts()
    res.json(products)
}

exports.createProduct = async (req, res, next) => {
    const body = req.body;
    const { productId } = req.params;

    const product = await transaction.createProduct(body, productId)
    res.json(product)
}

exports.updateProduct = async (req, res, next) => {
    const body = req.body;
    const { productId } = req.params;

    const product = await transaction.modifyProduct(body, productId)
    res.json(product)
}

exports.deleteProduct = async (req, res, next) => {
    const { productId } = req.params;
    const product = await transaction.deleteProduct(productId);

    res.json(`Product ${product.name} was removed`);
};
