const { Order } = require("./schemes/order")

exports.readElements = async () => {
    return await Order.find()

}

exports.readElement = async (idElement) => {
    return await Order.find({
        _id: idElement
    })
}

exports.insertElement = async (data) => {
    await new Order(data).save()
}


exports.deleteElement = async (id) => {
    return await Product.findByIdAndRemove(id, { new: true })
}
