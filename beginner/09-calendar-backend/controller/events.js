const Event = require("../models/Event");
const constants = require("../fixes/constants");

const getEvents = async (req, res) => {

  const events = await Event.find().populate("user", "name");

  return res.status(200).json({
    ok: true,
    msg: events
  });
};

const createEvent = async (req, res) => {

  const event = new Event(req.body);

  try {

    event.user = req.uid;

    const savedEvent = await event.save();

    return res.status(200).json({
      ok: true,
      msg: savedEvent
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: constants.SERVER_ERROR_MESSAGE
    });
  };

};

const updateEvent = async (req, res) => {

  const eventId = req.params.id;

  try {

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: constants.NON_EXISTENT_ID
      });
    };

    if (event.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: constants.UNAUTHORIZED
      });
    };

    const newEventData = {
      ...req.body,
      user: req.uid
    };

    const updateEvent = await Event.findByIdAndUpdate(eventId, newEventData, { new: true });

    return res.status(200).json({
      ok: true,
      msg: updateEvent
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: constants.SERVER_ERROR_MESSAGE
    });
  };

};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;

  try {

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: constants.NON_EXISTENT_ID
      });
    };

    if (event.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: constants.UNAUTHORIZED
      });
    };

    const deletedEvent = await Event.findOneAndDelete(eventId);

    return res.status(200).json({
      ok: true,
      msg: deletedEvent
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: constants.SERVER_ERROR_MESSAGE
    });
  };
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
};
