import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos  } from "../../fixtures/demoTodos";

describe('Tests on todoReducer', () => {

  test('It should return the default state', () => {

    const state = todoReducer( demoTodos, {} );
    expect( state ).toEqual( demoTodos );

  });

  test('It should add a TODO item', () => {

    const action = {
      type: 'add',
      payload: {
        id: 3,
        desc: 'Learn MySQL',
        done: false
      }
    };

    const state = todoReducer( demoTodos, action );
    expect( state ).toEqual( [ ...demoTodos, action.payload ] );
    expect( state.length ).toBe( 3 );

  });

  test('It should delete a TODO item', () => {

    const action = {
      type: 'delete',
      payload: 2 // TODO ID
    };

    const state = todoReducer( demoTodos, action );
    expect( state ).toEqual( [ demoTodos[0] ]);
    expect( state.length ).toBe( 1 );

  });

  test('It should toggle the done state in a TODO item', () => {

    const action = {
      type: 'toggle',
      payload: 2
    };

    const state = todoReducer( demoTodos, action );
    expect( state[1].done ).toBe( true );
    expect( state[0] ).toEqual( demoTodos[0] );
    expect( state.length ).toBe( 2 );

  });

});
