const User = require("../models/users");

exports.readElements = async () => {
    return await User.findAll()

}

exports.readElementUserId = async (userId) => {
    return await User.findByPk(userId)
}

exports.readElement = async (username, password) => {
    return await User.findOne({where: { username, password: password }});
}

exports.insertElement = async (data) => {
    await User.create(data);
}

exports.updateElement = async (data, id) => {
    return await User.update(data, {
        returning: true,
        where: {
            id
        }
    });
}

exports.deleteElement = async (idElement) => {
    return await User.destroy({where:{id:idElement}});
}
