const Joi = require('joi');
const pattern = /^[0-9a-fA-F]{24}$/;

exports.orderBody = Joi.object({
  cartId: Joi.string().required().regex(pattern).message('Invalid Cart Id'),
  address: Joi.string().required()
});
