/** * @jest-environment node */
import fs from "fs";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { collection, doc, deleteDoc, getDoc } from 'firebase/firestore';

import { db } from "../../firebase/firebaseConfig";
import { startNewNote, startLoadingNotes, startSaveNote, startUploading } from '../../actions/notes';
import { types } from '../../types/types';
import { fileUpload } from "../../helpers/fileUpload";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "UID_TESTING"
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

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn()
}));

describe('Tests on actions of notes', () => {

  beforeEach( () => {
    store = mockStore(initState);
  });

  test('Should create a new note startNewNote', async () => {
    await store.dispatch( startNewNote() );

    const actions = store.getActions();

    expect( actions[0] ).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      },
    });

    expect( actions[1] ).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      },
    });

    const { uid } = initState.auth;
    const { id } = actions[0].payload;

    // NOTE: Delete notes added by the test
    const docRef = collection(db, `${ uid }/journal/notes`);
    const completeRef = doc(docRef, `${ id }`);
    await deleteDoc(completeRef);

  });

  test('Should upload the notes startLoadingNotes', async () => {

    const { uid } = initState.auth;

    await store.dispatch( startLoadingNotes(uid) );

    const actions = store.getActions();

    expect( actions[0] ).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array)
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    expect( actions[0].payload[0] ).toMatchObject( expected );

  });

  test('Should update the note startSaveNote', async () => {

    const { uid } = initState.auth;

    const note = {
      id: "2ynYcuXGi0Yhcwo8B5Hs",
      title: "title",
      body: "body",
      date: new Date().getTime()
    };

    await store.dispatch( startSaveNote( note ) );

    const actions = store.getActions();

    expect( actions[0].type ).toBe( types.notesUpdated );

    const docRef = collection(db, `${ uid }/journal/notes`);
    const completeRef = await doc(docRef, `${ note.id }`);
    const docSnap = await getDoc(completeRef);

    expect( docSnap.data() ).toEqual({
      title: note.title,
      body: note.body,
      date: note.date
    });

  });

  test('Should update the url startUploading', async () => {

    const FAKE_URL = "https://hello-world.com";

    fileUpload.mockReturnValue(FAKE_URL);
    const { uid } = initState.auth;
    const { id } = initState.notes.active;

    fs.writeFileSync('foto.jpg', '')
    const file = fs.readFileSync('foto.jpg')

    await store.dispatch( startUploading( file ) );

    const docRef = collection(db, `${ uid }/journal/notes`);
    const completeRef = await doc(docRef, `${ id }`);
    const docSnap = await getDoc(completeRef);

    expect( docSnap.data().url ).toBe(FAKE_URL)

  });

});
