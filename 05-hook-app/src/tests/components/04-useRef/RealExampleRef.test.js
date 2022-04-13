import React from "react";
import { shallow } from 'enzyme';
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Test on <RealExampleRef />', () => {

  const wrapper = shallow( <RealExampleRef /> );

  test('It should show <RealExampleRef /> properly', () => {

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);

  });

  test('It should show <MultipleCustomHooks /> component properly', () => {

    const button = wrapper.find('button');
    button.simulate('click');

    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);

  });

});
