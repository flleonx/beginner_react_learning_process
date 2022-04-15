
import { returnArray } from '../../basics/07-destructuring-arr';

describe('Tests on 07-destructuring-arr', () => {

  test('should return a string and a number', () => {

    const [ letters, numbers ] = returnArray();

    // expect( arr ).toEqual( ['ABC', 123] );
    expect( letters ).toBe( 'ABC' );
    expect( typeof letters ).toBe( 'string' );

    expect( numbers ).toBe( 123 );
    expect( typeof numbers ).toBe( 'number' );
  })

})
