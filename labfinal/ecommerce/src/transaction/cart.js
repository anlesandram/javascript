const repository = require('../repositories/cart')
const productTransaction = require('../transaction/product')
const { NotFoundError } = require('../mappers/custom.exception').errorMappers



exports.updateCartItems = async (cartId, newCart) => {

    for (const item of newCart.items) {
        //Validate if cart exist
        let cart = await this.retrieveCart(cartId)

        //validate if product exist
        let product = await productTransaction.retrieveProduct(item.productId)

        //validate quantity
        if (item.quantity > product.availableUnits) {
            throw new NotFoundError("Not units available");
        }

        //Update Cart items
        if (cart.items.findIndex(i => i.productId === item.productId) !== -1) {
            repository.updateCartItems(cartId, item)
        } else {
            repository.addCartItems(cartId, item)
        }
    }
}

exports.readCarts = async () => {
    return await repository.readElements();
}


exports.createCart = async () => {
    await repository.insertElement();
}

exports.deleteCart = async (cartId) => {
    const cart = await this.retrieveCart(cartId);
    return repository.deleteElement(cartId);
}


exports.retrieveCart = async (cartId) => {
    const cart = await repository.readElement(cartId);
    console.log(cartId)

    if (cart.length == 0) {
        throw new NotFoundError("Cart not Found");
    }

    return cart[0]
}