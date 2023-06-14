
const Joi = require('joi');

exports.orderBody = Joi.object({
  cartId: Joi.string().required(),
  address: Joi.string().required()
});
