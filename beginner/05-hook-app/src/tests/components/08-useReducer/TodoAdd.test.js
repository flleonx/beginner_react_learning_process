import React from "react";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Tests on <TodoAdd />', () => {

  const handleAddTodo = jest.fn();

  const wrapper = shallow(
    <TodoAdd
      handleAddTodo={ handleAddTodo }
      />
  );

  test('It should show <TodoAdd /> properly', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('It should not call handleAddTodo', () => {

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault(){} });

    expect( handleAddTodo ).toHaveBeenCalledTimes(0);

  });

  test('It should call handleAddTodo', () => {

    const value = "Learn React";


    wrapper.find('input').simulate('change', {
      target: { value, name: 'description' }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault(){} });

    expect( handleAddTodo ).toHaveBeenCalledTimes(1);
    expect( handleAddTodo ).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });

    expect( wrapper.find('input').prop('value') ).toBe('');

  });

});
