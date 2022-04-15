import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Tests on authReducer', () => {

  const initialState = {
    uid: null,
    displayName: "",
  };

  test('Should return the user uid and name properly', () => {

    const action = {
      payload: {
        uid: "abc123",
        displayName: "flleonx"
      },
      type: types.login
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual({
      uid: "abc123",
      name: "flleonx"
    });
  });

  test('Should return the actual state', () => {

    const actualState = {
      uid: "abc123",
      name: "flleonx"
    };

    const state = authReducer(actualState, {
      type: "undefined action"
    });

    expect(state).toEqual(actualState);
  });

  test('Should return the user an empty object', () => {
    const state = authReducer(initialState, {
      type: types.logout
    });

    expect(state).toEqual({});
  });

});
