
import { getHeroById, getHeroByOwner } from '../../basics/08-imp-exp';
import heroes from '../../data/heroes';

describe('Tests on heroes functions', () => {

  test('should return an hero', () => {

    const id = 1;

    const testHero = getHeroById( id );

    const heroData = heroes.find( hero => hero.id  === id );

    expect(  testHero ).toEqual( heroData );

  })


  test('should return an undefined if hero does not exist', () => {

    const id = 10;

    const testHero = getHeroById( id );

    expect(  testHero ).toBe( undefined );

  })


  test('should return an array with the DC heroes', () => {

    const owner = 'DC';

    const filteredHeroes = heroes.filter( hero => hero.owner === owner );

    const dcHeroes = getHeroByOwner( owner );

    expect(  dcHeroes ).toEqual( filteredHeroes );

  })


  test('should return an array of length 2 with the Marvel heroes', () => {

    const owner = 'Marvel';

    const marvelHeroes = getHeroByOwner( owner );

    expect(  marvelHeroes.length ).toBe( 2 );

  })

});
