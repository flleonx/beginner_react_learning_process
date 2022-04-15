import Swal from "sweetalert2";

import { fetchWithToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";


export const calendarEventStartAddNew = (event) => {
  return async (dispatch, getState) => {

    const { uid, name } = getState().auth;

    try {
      const resp = await fetchWithToken("events", event, "POST");
      const body = await resp.json();

      if (body.ok) {
        event.id = body.msg.id;
        event.user = {
          _id: uid,
          name
        }
        console.log(event);
        dispatch(calendarEventAddNew(event));
      };
    } catch (error) {
      console.log(error);
    }
  };
};

const calendarEventAddNew = (event) => ({
  type: types.calendarEventAddNew,
  payload: event
});

export const calendarEventSetActive = (event) => ({
  type: types.calendarEventSetActive,
  payload: event
});

export const calendarEventClearActive = () => ({
  type: types.calendarEventClearActive
});

export const calendarEventStartUpdate = (event) => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken(`events/${event.id}`, event, "PUT");
      const body = await resp.json();

      if (body.ok) {
        dispatch(calendarEventUpdate(event));
      } else {
        Swal.fire("Error", body.msg, "error");
      };

    } catch (error) {
      console.log(error);
    }
  };
};

const calendarEventUpdate = (event) => ({
  type: types.calendarEventUpdate,
  payload: event
});

export const calendarEventStartDelete = (event) => {
  return async (dispatch, getState) => {

    const { id } = getState().calendar.activeEvent;

    try {
      const resp = await fetchWithToken(`events/${id}`, {}, "DELETE");
      const body = await resp.json();

      if (body.ok) {
        dispatch(calendarEventDelete());
      } else {
        Swal.fire("Error", body.msg, "error");
      };

    } catch (error) {
      console.log(error);
    }
  };
};

const calendarEventDelete = () => ({ type: types.calendarEventDelete });


export const calendarEventStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken("events");
      const body = await resp.json();
      const events  = prepareEvents(body.msg);

      dispatch(calendarEventLoaded(events));
    } catch (error) {
      console.log(error);
    }
  };
};

const calendarEventLoaded = (events) => ({
  type: types.calendarEventLoaded,
  payload: events
});

export const calendarEventLogout = () => ({ type: types.calendarEventLogout });
