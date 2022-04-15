import React from "react";
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Test on <GifGrid />', () => {

  const category = 'Fate Zero'

  test('It should show <GifGrid /> properly', () => {

    // Here the values are simulated
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow( <GifGrid category={ category } /> );
    expect( wrapper ).toMatchSnapshot();

  });

  test('It should show items when the images are loaded', () => {

    const gifs = [{
      id: 'ABC',
      url: "https://localhost/anything/img.gif",
      title: "Anything"
    },
    {
      id: '123',
      url: "https://localhost/anything/img.gif",
      title: "Anything"
    }];

    // Here the values are simulated
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow( <GifGrid category={ category } /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

  });

});
