const transaction = require('../transaction/user');
const httpStatus = require('http-status-codes')
const {StatusCodes} = httpStatus


exports.getUsers = async (_, res, next) => {
    const users = await transaction.readUsers()
    res.status(StatusCodes.OK).json(users)
}

exports.createUser = async (req, res, next) => {
    const body = req.body;
    const { userId } = req.params;

    const user = await transaction.createUser(body, userId)
    res.status(StatusCodes.OK).json(user)
}

exports.updateUser = async (req, res, next) => {
    const body = req.body;
    const { userId } = req.params;

    const users = await transaction.modifyUser(body, userId)
    
    res.status(StatusCodes.OK).json(users)
}

exports.deleteUser = async (req, res, next) => {
    const { userId } = req.params;
    const user = await transaction.deleteUser(userId);
    const userRemoved = `User ${user.firstName} was removed`
    
    res.status(StatusCodes.OK).json(userRemoved)
};
 