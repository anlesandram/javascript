const Joi = require('joi');
const pattern = /^[0-9a-fA-F]{24}$/;

exports.cartBody = Joi.object(
  {
    items: Joi.array()
    .items(
        Joi.object(
          {
            productId: Joi.string().required().regex(pattern).message('Invalid Product Id'),
            quantity: Joi.number().required()
          }).required()
        ).required()
  });
