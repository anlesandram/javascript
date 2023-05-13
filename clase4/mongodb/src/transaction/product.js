const repository = require('../repositories/product')
const {NotFoundError} = require('../mappers/custom.exception').errorMappers

exports.readProducts = async () => {
    return await repository.readElements();
}

exports.createProduct = async (newProduct) => {
    await repository.insertElement(newProduct);
}

exports.modifyProduct = async (newProduct, productId) => {
    const product = await repository.readElement(productId);

    if (product.length == 0) {
        throw new NotFoundError("Product not Found");
    }

    return repository.updateElement(newProduct, productId);
}

exports.deleteProduct = async (productId) => {
    const product = await repository.readElement(productId);

    if (product.length == 0) {
        throw new NotFoundError("Product not Found");
    }

    return repository.deleteElement(productId);
}