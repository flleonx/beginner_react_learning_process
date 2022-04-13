import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

// TODO: Check waitForNextUpdate -- mounted and unmounted
describe('Tests on hook useFetchGifs', () => {

  test('It should return the inital state', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( "Fate Zero" ) );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading ).toBeTruthy();

    // const { data, loading } = useFetchGifs( "Fate Zero" );
  });

  test('It should return an imgs array and loading = false ', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( "Fate Zero" ) );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect( data.length ).toBe( 10 );
    expect( loading ).toBeFalsy();

  });

});
