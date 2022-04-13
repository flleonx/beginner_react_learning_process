
// import defaultImport, { individualImports } from 'file';

import heroes, { owners} from '../data/heroes';


export const getHeroeById = ( id ) => heroes.find( ( hero ) => hero.id === id );

// console.log( getHeroeById(2) );

export const getHeroeByOwner = ( owner ) => heroes.filter( ( hero ) => hero.owner === owner );

// console.log( getHeroeByOwner('DC') );
