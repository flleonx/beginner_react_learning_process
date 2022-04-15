/*
  User routes / Auth
  host + /api/auth
*/
const { Router } = require("express");

const { createUser, loginUser, renewToken } = require("../controller/auth");
const { createUserSchema, loginUserSchema } = require("../models/joi-schemas");
const { loadSchema, fieldsValidator } = require("../middlewares/fields-validator");
const { jwtValidator } = require("../middlewares/jwt-validator");

const auth = Router();

auth.post("/", [
  loadSchema(loginUserSchema),
  fieldsValidator
], loginUser);

auth.post("/new", [
  loadSchema(createUserSchema),
  fieldsValidator
],createUser);

auth.get("/renew", [
  jwtValidator
], renewToken);

module.exports = auth;
