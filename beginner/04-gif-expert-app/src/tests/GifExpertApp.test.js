import React from "react";
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Tests on <GifExpertApp />', () => {
  test('It should show <GifExpertApp /> properly', () => {

    const wrapper = shallow( <GifExpertApp /> );
    expect( wrapper ).toMatchSnapshot();

  });

  test('It should show a list of categories', () => {

    const categories = ['Fate Zero', 'SAO'];
    const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );

  })
});
