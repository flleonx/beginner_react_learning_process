import React from "react";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { NoteScreen } from "../../../components/notes/NoteScreen";
import { activeNote } from "../../../actions/notes";

jest.mock("../../../actions/notes", () => ({
  ...jest.requireActual('../../../actions/notes'),
  activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "UID_TESTING",
    name: "flleonx"
  },
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    active: {
      id: "1234",
      title: "Hello",
      body: "World",
      date: 0
    },
    notes: []
  }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <NoteScreen/>
    </MemoryRouter>
  </Provider>
);

describe("Tests on <NoteScreen />", () => {

  test("Should show <NoteScreen /> properly", () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test("Should trigger the active note", () => {

    wrapper.find('input[name="title"]').simulate("change", {
      target: {
        name: "title",
        value: "Hello again"
      }
    });

    expect( activeNote ).toHaveBeenCalledWith(
      "1234",
      {
        body: "World",
        title: "Hello again",
        id: "1234",
        date: 0
      }
    );

  });

});
