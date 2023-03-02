const joi = require('joi');
const pass = joi.string().max(3);
console.log(pass.validate('666'));