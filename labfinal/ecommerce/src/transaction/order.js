const repository = require('../repositories/order')
const {NotFoundError} = require('../mappers/custom.exception').errorMappers

exports.readOrders = async () => {
    return await repository.readElements();
}

exports.createOrder = async (newOrder) => {
    //TODO validate cart Id
    //TODO Identify Guest and update the order
    //TODO calculate total price 
    await repository.insertElement(newOrder);
}

exports.deleteOrder = async (orderId) => {
    const order = await repository.readElement(orderId);

    if (order.length == 0) {
        throw new NotFoundError("Order not Found");
    }

    return repository.deleteElement(orderId);
}