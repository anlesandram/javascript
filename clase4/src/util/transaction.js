const repository = require('../repositories/product.repository');

exports.readProducts = async () => {
    return await repository.readElements();
}

exports.createProduct = async (newProduct) => {
    await repository.insertElement(newProduct);
}

exports.modifyProduct = async (newProduct, productId) => {
    const product = await repository.readElement(productId);

    if (product.length == 0) {
        throw new Error("Product not Found");
    }

    return repository.updateElement(newProduct, productId);
}

exports.deleteProduct = async (productId) => {
    const product = await repository.readElement(productId);

    if (product.length == 0) {
        throw new Error("Product not Found");
    }

    return repository.deleteElement(productId);
}