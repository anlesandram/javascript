const transaction = require('../transaction/user');
const httpStatus = require('http-status-codes')
const pagination = require('../utils/pagination');
const { StatusCodes } = httpStatus


exports.getUsers = async (req, res, next) => {
    const { page = 1, limit = 100, sort = "asc", name } = req.query;

    const users = await pagination.calculatePagination(transaction, page, limit, sort, name)
    return res
        .status(StatusCodes.OK)
        .json(users)
}

exports.getUser = async (req, res, next) => {
    const user = await transaction.getUserById(req.userId)
    res.status(StatusCodes.OK).json(user)
}

exports.createUser = async (req, res, next) => {
    const body = req.body;

    const user = await transaction.createUser(body)
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
