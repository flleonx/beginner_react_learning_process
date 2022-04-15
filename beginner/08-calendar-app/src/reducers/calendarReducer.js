import { types } from '../types/types';
// events: [{
//   id: new Date().getTime(),
//   title: "Boss's Birthday",
//   start: moment().toDate(),
//   end: moment().add(2, "hours").toDate(),
//   notes: "Buy cake",
//   user: {
//     _id: "123",
//     name: "flleonx"
//   }
// }],

const initialState = {
  events: [],
  activeEvent: null
};

export const calendarReducer = ( state = initialState, action ) => {

  switch (action.type) {

    case types.calendarEventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload]
      };

    case types.calendarEventSetActive:
      return {
        ...state,
        activeEvent: action.payload
      };

    case types.calendarEventClearActive:
      return {
        ...state,
        activeEvent: null
      };

    case types.calendarEventUpdate:
      return {
        ...state,
        events: state.events.map(
          e => ( e.id === action.payload.id ) ? action.payload : e
        )
      };

    case types.calendarEventDelete:
      return {
        ...state,
        events: state.events.filter(
          e => ( e.id !== state.activeEvent.id )
        ),
        activeEvent: null
      };

    case types.calendarEventLoaded:
      return {
        ...state,
        events: [...action.payload]
      };

    case types.calendarEventLogout:
      return {
        ...initialState
      };

    default:
      return state;

  };
};
