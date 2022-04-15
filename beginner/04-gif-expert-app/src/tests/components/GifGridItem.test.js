import React from "react";
import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Test on <GifGridItem />', () => {

  const title = "saitama GIF";
  const url = "https://media4.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=37e2bcb865x7pqu9y9r9bvsr4fxu00sqimu3w7yb37xcdxco&rid=giphy.gif&ct=g";

  const wrapper = shallow( <GifGridItem title={ title} url={ url }/> );

  test('It should show <GifGridItem /> properly', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('It should have a paragraph with the title', () => {

    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );

  });

  test('It should have an image equal to the url and alt based on the props', () => {

    const img = wrapper.find('img');
    expect( img.prop('src') ).toBe( url );
    expect( img.prop('alt') ).toBe( title );

  });

  test('It should have animate__fadeIn', () => {

    const div = wrapper.find('div');
    const className = div.prop('className');

    expect( className.includes("animate__fadeIn") ).toBe( true );
    // expect( div.hasClass( 'animate__fadeIn' ) );

  });

});
