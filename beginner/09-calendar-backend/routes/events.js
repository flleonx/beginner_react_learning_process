/*
  Events routes
  host + /api/events
*/
const { Router } = require("express");

const { jwtValidator } = require("../middlewares/jwt-validator");
const { createEventSchema, updateEventSchema } = require("../models/joi-schemas");
const { loadSchema, fieldsValidator } = require("../middlewares/fields-validator");
const { createEvent, deleteEvent, getEvents, updateEvent } = require("../controller/events");

const events = Router();

events.use(jwtValidator);

events.get("/", getEvents);

events.post("/", [
  loadSchema(createEventSchema),
  fieldsValidator,
], createEvent);

events.put("/:id", [
  loadSchema(updateEventSchema),
  fieldsValidator,
],updateEvent);

events.delete("/:id", deleteEvent);

module.exports = events;
