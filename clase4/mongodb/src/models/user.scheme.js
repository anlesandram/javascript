
const Joi = require('joi');

exports.userBody = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required()
});