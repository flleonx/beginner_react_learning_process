import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

// const initialState = [{
//   id: new Date().getTime(),
//   desc: 'Learn React',
//   done: false
// }];

const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Learn React',
  //   done: false
  // }];

};

export const TodoApp = () => {

  // When the init function is called whatever it returns
  // will be the initial state for the reducer.
  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ) );
  }, [todos]);

  const handleDelete = ( todoId ) => {

    // Create action
    const action = {
      type: 'delete',
      payload: todoId
    };

    // dispatch
    dispatch( action );
  };

  const handleToggle = ( todoId ) => {

    dispatch({
      type: 'toggle',
      payload: todoId
    });

  };

  const handleAddTodo = ( newTodo ) => {

    dispatch( {
      type: 'add',
      payload: newTodo
    });

  };

  return (
    <>
      <h1>TodoApp ( { todos.length } )</h1>
      <hr/>


      {/* TodoList, todos, handleDelete, handleToggle */}
      {/* TodoListItem, todo, index, handleDelete, handleToggle */}
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={ todos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
          />
        </div>

        <div className="col-5">
          <TodoAdd
            handleAddTodo={ handleAddTodo }
          />
        </div>

      </div>

    </>
  )
};
