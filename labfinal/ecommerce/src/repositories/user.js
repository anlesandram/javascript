const { User } = require("./schemes/users");

exports.readElements = async (limit, page) => {
    return await User.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
}

exports.readElementsByName = async (limit, page, sortCritteria, itemName) => {
    const sort = sortCritteria == "desc" ? "-firstName" : "firstName"

    return await User.find(
        { 'firstName': { $regex: itemName, $options: 'i' } }
    )
        .limit(limit)
        .skip((page - 1) * limit)
        .sort(sort)
        .exec();
}

exports.countElements = async () => {
    return User.count()
}

exports.readElementUserId = async (userId) => {
    return await User.find({
        _id: userId
    })
}

exports.readElement = async (username, password) => {
    return await User.find({
        username: username,
        password: password
    })
}

exports.insertElement = async (data) => {
    await new User(data).save()
}

exports.updateElement = async (data, id) => {
    return await User.findByIdAndUpdate(id, data, { new: true })
}

exports.deleteElement = async (idElement) => {
    return await User.findByIdAndRemove(idElement, { new: true })
}
