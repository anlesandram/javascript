const repository = require('../repositories/user')
const {NotFoundError} = require('../mappers/custom.exception').errorMappers
const {encryptPassword} = require("../utils/authentication");

exports.createUser = async (newUser) => {
    await repository.insertElement(newUser);
}

exports.modifyUser = async (newUser, userId) => {
    await this.getUserById(userId)

    const userUpdated = await repository.updateElement(newUser, userId);
    return userUpdated[1]

}

exports.deleteUser = async (userId) => {
    await this.getUserById(userId)

    repository.deleteElement(userId);
    return user[0];
}

exports.getUser = async (username, password) => {
    const user = await repository.readElement(username, encryptPassword(password));

    if (!user[0]) {
        throw new NotFoundError("User not Found");
    }
    return user[0]

}

exports.getUserById = async (userId) => {
    const user = await repository.readElementUserId(userId);

    if (!user[0]) {
        throw new NotFoundError("User not Found");
    }
    return user[0]
}

exports.readElements = async (limit, page, sortCritteria, itemName) => {
    return !itemName ?
        await repository.readElements(limit, page, sortCritteria) :
        await repository.readElementsByName(limit, page, sortCritteria, itemName)
}

exports.countElements = async () => {
    return await repository.countElements()
}