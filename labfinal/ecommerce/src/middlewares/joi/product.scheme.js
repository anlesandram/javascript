
const Joi = require('joi');

exports.productBody = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().integer().required(),
  category: Joi.string().required(),
});


exports.productParamId = Joi.object({
  productId: Joi.string().hex().length(24).required()
});