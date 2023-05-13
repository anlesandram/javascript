const User = require("../models/users");

exports.readElements = async () => {
    return await User.findAll()

}

exports.readElement = async (id) => {
    return await User.findByPk(id)

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
