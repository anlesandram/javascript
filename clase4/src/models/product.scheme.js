
const Joi = require('joi');

exports.productScheme = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().integer().required(),
  category: Joi.string().required(),
});
