import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter/useCounter';

describe('Tests on useCounter', () => {

  test('It should return the default values', () => {

    const { result } = renderHook( () => useCounter() );

    expect( result.current.counter ).toBe(10);
    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.decrement ).toBe('function');
    expect( typeof result.current.reset ).toBe('function');

  });

  test('It should have the counter in 100', () => {

    const { result } = renderHook( () => useCounter(100) );

    expect( result.current.counter ).toBe(100);

  });

  test('It should increment the counter in 1', () => {

    const { result } = renderHook( () => useCounter(100) );
    const { increment } = result.current;

    act( () => increment() );

    const { counter } = result.current;
    expect( counter ).toBe(101);

  });

  test('It should decrement the counter in 1', () => {

    const { result } = renderHook( () => useCounter(100) );
    const { decrement } = result.current;

    act( () => decrement() );

    const { counter } = result.current;
    expect( counter ).toBe(99);

  });

  test('It should reset the counter with the value passed as an argument', () => {

    const { result } = renderHook( () => useCounter(100) );
    const { increment, reset } = result.current;

    act( () => {

      increment();
      reset();

    });

    const { counter } = result.current;
    expect( counter ).toBe(100);

  });

});
