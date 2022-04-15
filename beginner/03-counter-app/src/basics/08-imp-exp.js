
// import defaultImport, { individualImports } from 'file';

import heroes from '../data/heroes';


export const getHeroById = ( id ) => heroes.find( ( hero ) => hero.id === id );

// console.log( getHeroeById(2) );

export const getHeroByOwner = ( owner ) => heroes.filter( ( hero ) => hero.owner === owner );

// console.log( getHeroeByOwner('DC') );
