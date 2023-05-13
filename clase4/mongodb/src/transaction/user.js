const repository = require('../repositories/user')
const {NotFoundError} = require('../mappers/custom.exception').errorMappers

exports.readUsers = async () => {
    return await repository.readElements();
}

exports.createUser = async (newUser) => {
    await repository.insertElement(newUser);
}

exports.modifyUser = async (newUser, userId) => {
    const user = await repository.readElement(userId);

    if (!user) {
        throw new NotFoundError("User not Found");
    }

    const userUpdated = await repository.updateElement(newUser, userId);
    return userUpdated[1]

}

exports.deleteUser = async (userId) => {
    const user = await repository.readElement(userId);

    if (!user) {
        throw new NotFoundError("User not Found");
    }

    repository.deleteElement(userId);
    return user;
}