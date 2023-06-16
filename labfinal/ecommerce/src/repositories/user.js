const { User } = require("./schemes/users");

exports.readElements = async () => {
    return await User.find()
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
