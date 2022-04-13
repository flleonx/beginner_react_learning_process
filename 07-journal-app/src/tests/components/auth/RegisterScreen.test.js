import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { types } from "../../../types/types";

// jest.mock("../../../actions/auth", () => ({
// }));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  }
};

const store = mockStore(initState);
// store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen/>
    </MemoryRouter>
  </Provider>
);

describe('Test on <RegisterScreen />', () => {

  beforeEach( () => {
    store.clearActions();
    jest.clearAllMocks();
  });

  test('Should show <RegisterScreen /> properly', () => {

    expect( wrapper ).toMatchSnapshot();

  });


  test('Should dispatch the proper action', () => {

    const emailField = wrapper.find('input[name="email"]');
    emailField.simulate("change", {
      target: {
        value: "",
        name: "email"
      }
    });

    wrapper.find("form").simulate("submit");

    const actions = store.getActions();

    expect( actions[0] ).toEqual({
      type: types.uiSetError,
      payload: "Email is not valid"
    });

  });

  test("Should show the alert box with the error", () => {

    const initState = {
      auth: {},
      ui: {
        loading: false,
        msgError: "Email is not valid"
      }
    };

    // NOTE: store doesn't mutate the state, it just tracks the several actions,
    // that could be triggered
    const store = mockStore(initState);

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterScreen/>
        </MemoryRouter>
      </Provider>
    );
    // NOTE: It only shows the message when the msgError exists
    expect( wrapper.find(".auth__alert-error").exists() ).toBe(true);
    expect( wrapper.find(".auth__alert-error").text().trim() ).toBe( initState.ui.msgError );

  });

});
