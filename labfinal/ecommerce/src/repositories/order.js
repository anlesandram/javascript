const { Order } = require("./schemes/order")

exports.readElements = async (limit, page) => {
    return await Order.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
}

exports.countElements = async () => {
    return Order.count()
}

exports.readElement = async (idElement) => {
    return await Order.find({
        _id: idElement
    })
}

exports.getOrderByUserId = async (idElement, userId) => {
    return await Order.find({
        _id: idElement,
        userId : userId
    })
}

exports.insertElement = async (data) => {
    return await new Order(data).save()
}


exports.deleteElement = async (id) => {
    return await Order.findByIdAndRemove(id, { new: true })
}


exports.updateOrderPaymentInfo = async(orderId, paymentId) => {
    return Order.updateOne(
        { _id: orderId },
        {
            $set: {
                "paymentId": paymentId
            }
        }
    )
}