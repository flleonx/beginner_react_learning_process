import React from "react";
import { shallow } from 'enzyme';
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos  } from "../../fixtures/demoTodos";

describe('Test on <TodoListItem />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={ demoTodos[0] }
      index={ 0 }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
      />
  );

  test('It should show <TodoListItem /> properly', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('It should call the handleDelete function', () => {

    wrapper.find('button').simulate('click');
    expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

  });

  test('It should call the handleToggle function', () => {

    wrapper.find('p').simulate('click');
    expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

  });

  test('It should show the text properly', () => {

    const i = 0;
    const pValue = wrapper.find('p').text().trim();
    expect( pValue ).toBe(`${ i + 1 }. ${ demoTodos[0].desc }`);

  });

  test('It should have the "complete" class if TODO.done = true', () => {


    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={ todo }
        index={ 0 }
        handleDelete={ handleDelete }
        handleToggle={ handleToggle }
        />
    );

    const p = wrapper.find('p');
    expect( p.hasClass('complete') ).toBe( true );

  });

});
