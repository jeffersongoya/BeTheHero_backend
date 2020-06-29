const { celebrate, Joi, Segments } = require("celebrate");

module.exports.validate_logon = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
    email: Joi.string()
      .required()
      .email()
  })
});
