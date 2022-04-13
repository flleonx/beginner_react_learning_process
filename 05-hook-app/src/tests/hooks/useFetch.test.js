import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from "../../hooks/useFetch/useFetch";

describe('Tests on useFetch', () => {

  test('It should return the default info', () => {

    const { result } = renderHook( () => useFetch( `https://www.breakingbadapi.com/api/quotes/1` ) );

    const { data, loading, error } = result.current;
    expect( data ).toBe(null);
    expect( loading ).toBe(true);
    expect( error ).toBe(null);

  });

  test('It should return the desired info (loading: false, error: false)', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetch( `https://www.breakingbadapi.com/api/quotes/1` ) );
    await waitForNextUpdate({ timeout: 10000 });

    const { data, loading, error } = result.current;

    expect( data.length ).toBe(1);
    expect( loading ).toBe(false);
    expect( error ).toBe(null);

  });

  test('It should return handle the error', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetch( `https://reqres.in/apid/users?page=2` ) );
    await waitForNextUpdate({ timeout: 10000 });

    const { data, loading, error } = result.current;

    expect( data ).toBe(null);
    expect( loading ).toBe(false);
    expect( error ).toBe('It was not possible to load the info');

  });

});
