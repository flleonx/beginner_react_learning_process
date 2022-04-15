import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Tests on authReducer', () => {

  test('It should return the default state', () => {

    const state = authReducer({ logged: false }, {} );
    expect( state ).toEqual({ logged: false });

  });

  test('It shold authenticate and set the username ', () => {

    const action = {
      type: types.login,
      payload: {
        name: 'flleonx'
      }
    };

    const state = authReducer({ logged: false }, action );

    expect( state ).toEqual({
      logged: true,
      name: "flleonx"
    });

  });

  test('It should delete the username and set log to false', () => {

    const action = {
      type: types.logout,
    };

    const state = authReducer({ logged: true, name: 'flleonx' }, action );
    expect( state ).toEqual({ logged: false });

  });

});
