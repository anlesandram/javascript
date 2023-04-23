const { Product } = require("../models/products")

exports.readElements = async () => {
    return await Product.find()

}

exports.readElement = async (idElement) => {
    return await Product.find({
        _id: idElement
      })

}

exports.insertElement = async (data) => {
    await new Product(data).save()
}

exports.updateElement = async (data, id) => {
   return await Product.findByIdAndUpdate(id, data, {new: true});
}

exports.deleteElement = async (id) => {
    return await Product.findByIdAndRemove(id, {new: true});
}
