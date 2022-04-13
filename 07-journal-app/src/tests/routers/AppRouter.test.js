import React from "react";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { signInWithEmailAndPassword } from "firebase/auth";

import { AppRouter } from "../../routers/AppRouter";
import { login } from "../../actions/auth";
import { db, auth } from "../../firebase/firebaseConfig";

jest.mock("../../actions/auth", () => ({
  ...jest.requireActual('../../actions/auth'),
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "UID_TESTING"
  },
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    active: {
      id: "abc",
    },
    notes: []
  }
};

let store = mockStore(initState);
store.dispatch = jest.fn();


describe("Test on <AppRouter />", () => {

  beforeEach( () => {
    store.clearActions();
    jest.clearAllMocks();
  });

  test("Should call the login if the user is authenticated", async () => {

    let user;

    await act( async () => {

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter/>
          </MemoryRouter>
        </Provider>
      );

      const email = process.env.REACT_APP_TEST_EMAIL;
      const password = process.env.REACT_APP_TEST_PASSWORD;

      const { user } = await signInWithEmailAndPassword( auth, email, password );

      expect( login ).toHaveBeenCalledWith(user.uid, null);

    });

    // expect( wrapper ).toMatchSnapshot();

  });

});
