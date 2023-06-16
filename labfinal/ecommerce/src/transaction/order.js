const repository = require('../repositories/order')
const cartTransaction = require('../transaction/cart')
const {NotFoundError} = require('../mappers/custom.exception').errorMappers

exports.readOrders = async () => {
    return await repository.readElements();
}

exports.createOrder = async (order, userId) => {
    //validate cart Id
    const cart = await cartTransaction.retrieveCart(order.cartId)
    const items = cart.items
    
    //calculate total price 
    let totalPrice = 0
    items.forEach(item => {
        totalPrice = item.totalPriceProduct + totalPrice

    });
    
    const newOrder = {
        "cartId": order.cartId,
        "address": order.address,
        "totalPrice": totalPrice,
        "items": items,
        "userId": userId
    }
    const orderCreated = await repository.insertElement(newOrder);
    return orderCreated._id.valueOf()
}

exports.deleteOrder = async (orderId) => {
    await this.retrieveOrder(orderId)
    return repository.deleteElement(orderId);
}

exports.updateOrderPaymentInfo = async (orderId, paymentId) => {
    return repository.updateOrderPaymentInfo(orderId, paymentId)
} 

exports.retrieveOrder = async (orderId) => {
    const order = await repository.readElement(orderId);

    if (order.length == 0) {
        throw new NotFoundError("Order not Found");
    }

    return order[0]
}

exports.getOrderByUserId = async (orderId, userId) => {
    const order = await repository.getOrderByUserId(orderId, userId);

    if (order.length == 0) {
        throw new NotFoundError("Order not Found");
    }

    return order[0]
}