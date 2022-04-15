import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm/useForm';

describe('Tests on useForm', () => {

  const initialForm = {
    name: 'flleonx',
    email: 'flleonx@gmail.com'
  };

  test('It should return a form by default', () => {

    const { result } = renderHook( () => useForm( initialForm ) );
    const [ formValues, handleInputChange, reset ] = result.current;

    expect( formValues ).toEqual( initialForm );
    expect( typeof handleInputChange ).toBe( 'function' );
    expect( typeof reset ).toBe( 'function' );

  });

  test('It should change the form value (name)', () => {

    const { result } = renderHook( () => useForm( initialForm ) );
    const [ , handleInputChange ] = result.current;

    act( () => {

      handleInputChange({
        target: {
          name: 'name',
          value: 'flleond'
        }
      });

    });

    const [ formValues ] = result.current;

    expect( formValues ).toEqual( {... initialForm, name: 'flleond' });

  });

  test('It should restore the form with RESET', () => {

    const { result } = renderHook( () => useForm( initialForm ) );
    const [ , handleInputChange, reset ] = result.current;

    act( () => {

      handleInputChange({
        target: {
          name: 'name',
          value: 'flleond'
        }
      });

      reset();

    });

    const [ formValues ] = result.current;

    expect( formValues ).toEqual( initialForm );

  });

});
