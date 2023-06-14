

const Joi = require('joi');
const pattern = /^[0-9a-fA-F]{24}$/;

exports.idValidation = Joi.string().required().regex(pattern).message('Invalid Param Id')