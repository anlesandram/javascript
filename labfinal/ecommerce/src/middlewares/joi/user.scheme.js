
const Joi = require('joi');

exports.userBody = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

exports.userUpdateBody = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required()
});
