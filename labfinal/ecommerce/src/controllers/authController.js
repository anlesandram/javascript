const jwt = require("jsonwebtoken");
const transaction = require('../transaction/user');
const httpStatus = require('http-status-codes')
const {StatusCodes} = httpStatus

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await transaction.getUser(username, password)

  token = jwt.sign(
    { user },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  )
    console.log(user)
    console.log(user.username)
  res.json({token, email: user.username, name: user.firstName}).status(StatusCodes.OK);

};

exports.restrictedView = (_, res) => {
  res.status(200)
    .send("Confidential View")
}