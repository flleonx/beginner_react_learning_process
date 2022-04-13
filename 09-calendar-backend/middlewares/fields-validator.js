const { response } = require("express");
const utils = require("../lib/utils");

const loadSchema = (schema) => {
  return (req, res, next) => {
    req.schema = schema;
    next();
  };
};

const fieldsValidator = (req, res = response, next) => {

  const customSchema = req.schema;

  const { error, value: body } = customSchema.validate(req.body);

  if (error) {
    const errors = utils.renderErrors(error);
    return res.status(400).json({
      ok: false,
      msg: errors,
    });
  }

  req.body = body;

  next();
};

module.exports = {
  loadSchema,
  fieldsValidator
};
