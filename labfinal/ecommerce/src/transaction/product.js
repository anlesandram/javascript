const repository = require('../repositories/product')
const { NotFoundError } = require('../mappers/custom.exception').errorMappers

exports.readElements = async (limit, page, sortCritteria, itemName) => {
    return !itemName ?
        await repository.readElements(limit, page, sortCritteria) :
        await repository.readElementsByName(limit, page, sortCritteria, itemName)
}

exports.countElements = async () => {
    return await repository.countProducts()
}

exports.createProduct = async (newProduct) => {
    await repository.insertElement(newProduct);
}

exports.modifyProduct = async (newProduct, productId) => {
    const product = await this.retrieveProduct(productId);
    return repository.updateElement(newProduct, productId);
}

exports.deleteProduct = async (productId) => {
    const product = await this.retrieveProduct(productId);
    return repository.deleteElement(productId);
}

exports.retrieveProduct = async (productId) => {
    const product = await repository.readElement(productId);

    if (product.length == 0) {
        throw new NotFoundError("Product not Found");
    }

    return product[0]
}

exports.updateProductQuantity = async (items) => {
    for (const item of items) {
        let productId = item.productId
        let quantityOrder = item.quantity

        let product = await this.retrieveProduct(productId)
        console.log(product)
        let calculateQuantity = product.quantity - quantityOrder

        await repository.updateProductQuantity(productId, calculateQuantity)
    }

} 