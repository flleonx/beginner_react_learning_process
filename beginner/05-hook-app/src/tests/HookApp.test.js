import React from "react";
import { shallow } from 'enzyme';
import { HookApp } from "../HookApp";

describe('Tests on <HookApp />', () => {

  test('It should show <HookApp /> properly', () => {

    const wrapper = shallow( <HookApp /> );
    expect( wrapper ).toMatchSnapshot();

  });

});
