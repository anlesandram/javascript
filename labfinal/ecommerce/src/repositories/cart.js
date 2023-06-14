const { Cart } = require("./schemes/cart")

exports.readElements = async () => {
    return await Cart.find()

}

exports.readElement = async (idElement) => {
    return await Cart.find({
        _id: idElement
    })
}

exports.insertElement = async () => {
    await new Cart().save()
}

exports.updateCartItems = async (cartId, item) => {

    console.log(cartId)
    console.log( item.productId)
    console.log( item.quantity)
    return Cart.updateOne(
        { _id: cartId, "items.productId": item.productId },
        {
            $set: {
                "items.$.quantity": item.quantity,
            }
        }
    )
}

exports.addCartItems = async (cartId, item) => {
    console.log(cartId + " "+ item)
    return Cart.updateOne(
        { _id: cartId },
        {
            $push: {
                items: {
                    "productId" : item.productId,
                    "quantity" : 3.0
                } 
            }
        }
    )
}

exports.deleteElement = async (id) => {
    return await Cart.findByIdAndRemove(id, { new: true })
}
