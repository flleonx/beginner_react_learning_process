import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { JournalEntry } from "../../../components/journal/JournalEntry";
import { activeNote } from "../../../actions/notes";

// jest.mock("../../../actions/notes", () => ({
//   ...jest.requireActual('../../../actions/notes'),
//   startNewNote: jest.fn(),
// }));

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

const note = {
  id: "10",
  date: 0,
  title: "Hello",
  body: "World",
  url: "https://somewhere.com/foto.jpg"
}

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <JournalEntry {...note}/>
    </MemoryRouter>
  </Provider>
);

describe('Tests on <JournalEntry />', () => {

  test('Should show <JournalEntry /> properly', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('Should trigger the note', () => {

    wrapper.find(".journal__entry").prop("onClick")();

    // NOTE: Another alternative to check the behavior
    expect( store.dispatch ).toHaveBeenCalledWith(
      activeNote( note.id, {...note} )
    );

  });

});
