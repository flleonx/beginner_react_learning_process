import React from 'react'
import { shallow } from 'enzyme'

import CounterApp from '../CounterApp';

describe('Tests on <CounterApp />', () => {

  let wrapper = shallow( <CounterApp /> ); // Keep intellisense

  beforeEach( () => {

    wrapper = shallow( <CounterApp /> );

  });

  test('It should show < CounterApp /> with its default value', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('It should show < CounterApp /> with the value passed trough props', () => {

    const value = 100;
    const wrapper = shallow(
      <CounterApp
        value={ value }
      />
    );

    const valueText = wrapper.find('h2').text();

    expect( valueText ).toBe( value.toString() );

  });

  test('It should increment counter +1 when press the button', () => {

    wrapper.find('button').at(0).simulate('click');

    const valueText = wrapper.find('h2').text();

    expect( valueText ).toBe( '11' );

  });

  test('It should decrement counter -1 when press the button', () => {

    wrapper.find('button').at(2).simulate('click');

    const valueText = wrapper.find('h2').text();

    expect( valueText ).toBe( '9' );

  });

  test('It should set the default value when press the reset button', () => {

    const value = 105;

    const wrapper = shallow( <CounterApp value={ value } /> );

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const valueText = wrapper.find('h2').text();

    expect( valueText ).toBe( value.toString() );

  });

});
