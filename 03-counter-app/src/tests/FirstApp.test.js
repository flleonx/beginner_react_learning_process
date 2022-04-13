import React from 'react'
import { shallow } from 'enzyme'

import FirstApp from '../FirstApp';


describe('Tests on <FirstApp />', () => {

  // test(`It should show the message "Hello, I'm Goku"`, () => {

  //   const greet = "Hello, I'm Goku";

  //   const { getByText } = render( <FirstApp greet={ greet } /> );

  //   expect( getByText( greet ) ).toBeInTheDocument();

  // });

  test('It should show < FirstApp /> properly', () => {


    const greet = "Hello, I'm Goku";

    const wrapper = shallow( <FirstApp greet={ greet } /> );

    expect( wrapper ).toMatchSnapshot();

  });

  test('It should show the subtitle sent through props', () => {

    const greet = "Hello, I'm Goku";
    const subtitle = "I'm a new subtitle";
    const wrapper = shallow(
      <FirstApp
        greet={ greet }
        subtitle={ subtitle }
      />
    );

    const paragraphText = wrapper.find('p').text();

    expect( paragraphText ).toBe( subtitle );

  });

});
