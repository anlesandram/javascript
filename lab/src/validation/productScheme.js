
const Joi = require('joi');

const productScheme = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.string().required(),
  category: Joi.string().required(),
});


module.exports = productScheme;