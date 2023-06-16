const { Cart } = require("./schemes/cart")

exports.readElements = async (limit, page) => {
    return await Cart.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
}

exports.countElements = async () => {
    return Cart.count()
}

exports.readElement = async (idElement) => {
    return await Cart.find({
        _id: idElement
    })
}

exports.insertElement = async () => {
    return await new Cart().save()
}

exports.updateCartItems = async (cartId, item) => {
    return await Cart.updateOne(
        { _id: cartId, "items.productId": item.productId },
        {
            $set: {
                "items.$.quantity": item.quantity,
                "items.$.totalPriceProduct": item.totalPriceProduct
            }
        }
    )
}

exports.addCartItems = async (cartId, item) => {
    return await Cart.updateOne(
        { _id: cartId },
        {
            $push: {
                items: {
                    "productId": item.productId,
                    "quantity": item.quantity,
                    "totalPriceProduct": item.totalPriceProduct
                }
            }
        }
    )
}

exports.deleteElement = async (id) => {
    return await Cart.findByIdAndRemove(id, { new: true })
}
