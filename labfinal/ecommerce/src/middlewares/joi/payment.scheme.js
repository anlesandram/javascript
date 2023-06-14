
const Joi = require('joi');

exports.paymentBody = Joi.object({
  orderId: Joi.string().required(),
  cardId: Joi.string().required(),
  description: Joi.string().required()
});
