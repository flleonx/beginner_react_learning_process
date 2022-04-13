const Joi = require("@hapi/joi");
const moment = require("moment");

const createUserSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(3)
    .required()
    .error(() => "Ingrese un nombre de usuario válido"),
  email: Joi.string()
    .lowercase()
    .trim()
    .email()
    .required()
    .error(() => "Ingrese un email válido"),
  password: Joi.string()
    .min(6)
    .required()
    .error(() => "Ingrese una contraseña válida")
});

const loginUserSchema = Joi.object({
  email: Joi.string()
    .lowercase()
    .trim()
    .email()
    .required()
    .error(() => "Ingrese un email válido"),
  password: Joi.string()
    .min(6)
    .required()
    .error(() => "Ingrese una contraseña válida")
});

const createEventSchema = Joi.object({
  title: Joi.string()
    .required()
    .error(() => "Ingrese un título"),
  notes: Joi.string()
    .optional()
    .error(() => "Ingrese las notas correctamente"),
  start: Joi.date()
    // .custom((value, helper) => {
    //   const date = moment(value);
    //   if (date.isValid()) return true;
    //   return helper.message("Start date is invalid");
    // })
    .required()
    .error(() => "Ingrese una fecha válida"),
  end: Joi.date()
    .required()
    .error(() => "Ingrese una fecha válida"),
});

const updateEventSchema = Joi.object({
  title: Joi.string()
    .optional()
    .error(() => "Ingrese un título"),
  notes: Joi.string()
    .optional()
    .error(() => "Ingrese las notas correctamente"),
  start: Joi.date()
    .optional()
    .error(() => "Ingrese una fecha válida"),
  end: Joi.date()
    .optional()
    .error(() => "Ingrese una fecha válida"),
  id: Joi.string()
    .required()
    .error(() => "Ingrese un id válido"),
  user: Joi.object().keys({
    _id: Joi.string().required(),
    name: Joi.string().required(),
  })
    .required()
    .error(() => "Ingrese una usuario válida"),
});

module.exports = {
  createUserSchema,
  loginUserSchema,
  createEventSchema,
  updateEventSchema,
};
