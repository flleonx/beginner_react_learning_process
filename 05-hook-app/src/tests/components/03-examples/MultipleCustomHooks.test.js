import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch/useFetch';
import { useCounter } from '../../../hooks/useCounter/useCounter';

jest.mock('../../../hooks/useFetch/useFetch');
jest.mock('../../../hooks/useCounter/useCounter');


describe('Tests on <MultipleCustomHooks />', () => {

  beforeEach( () => {
    useCounter.mockReturnValue({
      counter: 10,
    });
  });

  test('It should show <MultipleCustomHooks /> properly', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow( <MultipleCustomHooks /> );
    expect( wrapper ).toMatchSnapshot();

  });

  test('It should show the info', () => {

    useFetch.mockReturnValue({
      data: [{
        author: 'flleonx',
        quote: 'To be, or not to be, that is the question'
      }],
      loading: false,
      error: null
    });

    const wrapper = shallow( <MultipleCustomHooks /> );

    expect( wrapper.find('.alert').exists() ).toBe(false);
    expect( wrapper.find('.mb-3').text().trim() ).toBe('To be, or not to be, that is the question');
    expect( wrapper.find('footer').text().trim() ).toBe('flleonx');

  });

});
