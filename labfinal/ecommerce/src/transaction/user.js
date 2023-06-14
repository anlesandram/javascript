const repository = require('../repositories/user')
const {NotFoundError} = require('../mappers/custom.exception').errorMappers
const {encryptPassword} = require("../utils/authentication");


exports.readUsers = async () => {
    return await repository.readElements();
}

exports.createUser = async (newUser) => {
    await repository.insertElement(newUser);
}

exports.modifyUser = async (newUser, userId) => {
    const user = await repository.readElementUserId(userId);

    if (!user) {
        throw new NotFoundError("User not Found");
    }

    const userUpdated = await repository.updateElement(newUser, userId);
    return userUpdated[1]

}

exports.getUser = async (username, password) => {
    const user = await repository.readElement(username, encryptPassword(password));

    if (!user) {
        throw new NotFoundError("User not Found");
    }
    return user

}

exports.deleteUser = async (userId) => {
    const user = await repository.readElementUserId(userId);

    if (!user) {
        throw new NotFoundError("User not Found");
    }

    repository.deleteElement(userId);
    return user;
}
