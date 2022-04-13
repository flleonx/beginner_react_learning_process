
import { getHeroByIdAsync } from '../../basics/09-promises';
import heroes from '../../data/heroes';

describe('Test 09-promises', () => {

  test('should return a hero async', ( done ) => {

    const id = 1;

    getHeroByIdAsync( id )
      .then( hero => {

        expect( hero ).toBe( heroes[0] );

        done();

      });

  });

  test('it should get an error if hero by id does not exist', ( done ) => {

    const id = 10;

    getHeroByIdAsync( id )
      .catch( error => {

        expect( error ).toBe( 'Hero was not found' );

        done();

      });

  });

});
