import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "UID_TESTING",
    displayName: "flleonx"
  },
  notes: {
    active: {
      id: "2ynYcuXGi0Yhcwo8B5Hs",
      title: "Hello",
      body: "World",
      date: new Date().getTime()
    }
  }
};

let store = mockStore(initState);

describe("Test on auth actions", () => {

  beforeEach( () => {
    store = mockStore(initState);
  });

  test("Login should create the corresponding action", () => {

    const { uid, displayName } = initState.auth;

    const loginAction = login( uid, displayName );

    expect( loginAction ).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName
      }
    });

  });

  test("Logout should create the corresponding action", () => {

    const logoutAction = logout();

    expect( logoutAction ).toEqual({
      type: types.logout,
    });

  });

  test("Should execute the startLogout", async () => {

    await store.dispatch( startLogout() );

    const actions = store.getActions();

    expect( actions[0] ).toEqual({
      type: types.logout
    });

    expect( actions[1] ).toEqual({
      type: types.notesLogoutCleaning
    });

  });

  test("Should start the startLoginEmailPassword", async () => {

    const email = process.env.REACT_APP_TEST_EMAIL;
    const password = process.env.REACT_APP_TEST_PASSWORD;

    await store.dispatch( startLoginEmailPassword(email, password) );

    const actions = store.getActions();
    expect( actions[1] ).toEqual({
      type: types.login,
      payload: {
        uid: "PMdJJNVtNlWGr5I89uECUvmvoMP2",
        displayName: null
      }
    });
  });

});
