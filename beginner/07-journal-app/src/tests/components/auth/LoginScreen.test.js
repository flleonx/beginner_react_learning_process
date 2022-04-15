import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { LoginScreen } from "../../../components/auth/LoginScreen";
import { startGoogleLogin, startLoginEmailPassword } from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  ...jest.requireActual('../../../actions/auth'),
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen/>
    </MemoryRouter>
  </Provider>
);

describe('Test on <LoginScreen />', () => {

  beforeEach( () => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test('Should show <LoginScreen /> properly', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('Should trigger the startGoogleLogin action', () => {

    wrapper.find(".google-btn").prop("onClick")();

    expect( startGoogleLogin ).toHaveBeenCalled();

  });

  test('Should trigger the startLoginEmailPassword action with the proper arguments', () => {

    const email = "test_firebase@yopmail.com";
    const password =  "123456";

    wrapper.find("form").simulate("submit");

    expect( startLoginEmailPassword ).toHaveBeenCalledWith( email, password );

  });

});
