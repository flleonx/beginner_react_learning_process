import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Test on <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
  });

  test('It should show <AddCategory /> properly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('It should change the text box', () => {

    const input = wrapper.find('input');
    const value = 'Hello World';
    input.simulate('change', { target: { value } });

    expect( wrapper.find('p').text().trim() ).toBe( value );

  });

  test('It should not submit the info', () => {

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).not.toHaveBeenCalled();

  });

  test('It shoud call setCategories and clean the text box', () => {

    const input = wrapper.find('input');
    const value = "Hello World";
    // Simulate input change
    input.simulate('change', { target: { value } });
    // Simulate sumbit
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    // check calling and input value
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
    expect( input.prop('value') ).toBe('');

  });

});
