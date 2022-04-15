import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { Sidebar } from "../../../components/journal/Sidebar";
import { startLogout } from "../../../actions/auth";
import { startNewNote } from "../../../actions/notes";

jest.mock("../../../actions/auth", () => ({
  ...jest.requireActual('../../../actions/auth'),
  startLogout: jest.fn(),
}));

jest.mock("../../../actions/notes", () => ({
  ...jest.requireActual('../../../actions/notes'),
  startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "UID_TESTING",
    uid: "flleonx"
  },
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    active: null,
    notes: []
  }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <Sidebar/>
    </MemoryRouter>
  </Provider>
);

describe('Tests on <Sidebar />', () => {
  test('Should show <Sidebar /> properly', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('Should call startLogout', () => {

    wrapper.find("button").simulate("click");
    expect( startLogout ).toHaveBeenCalled();

  });

  test('Should call startNewNote', () => {
    wrapper.find(".journal__new-entry").simulate("click");
    expect( startNewNote ).toHaveBeenCalled();
  });
});
