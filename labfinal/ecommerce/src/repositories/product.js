const { Product } = require("../repositories/schemes/products")

exports.readElements = async (limit, page) => {
    return await Product.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
}

exports.readElementsByName = async (limit, page, sortCritteria, itemName) => {
    const sort = sortCritteria == "desc" ? "-name" : "name"

    return await Product.find(
        { 'name': { $regex: itemName, $options: 'i' } }
    )
        .limit(limit)
        .skip((page - 1) * limit)
        .sort(sort)
        .exec();
}

exports.countElements = async () => {
    return Product.count()
}

exports.countProducts = async () => {
    return Product.count()
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
    return await Product.findByIdAndUpdate(id, data, { new: true });
}

exports.deleteElement = async (id) => {
    return await Product.findByIdAndRemove(id, { new: true });
}


exports.updateProductQuantity = async (productId, quantity) => {
    return await Product.updateOne(
        { _id: productId },
        {
            $set: {
                "quantity": quantity
            }
        }
    )
}