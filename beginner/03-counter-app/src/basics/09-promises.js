
import { getHeroById, getHeroByOwner } from "./08-imp-exp";

// const promise = new Promise( (resolve, reject) => {
//
//   setTimeout(() => {
//     // resolve();
//     const hero = getHeroeById(2);
//     resolve( hero );
//     // reject( 'The hero was not found' );
//   }, 2000 );
//
// });
//
// promise.then( ( hero ) => {
//   console.log(hero);
// })
// .catch( error => console.warn( error) );

export const getHeroByIdAsync = ( id ) => {

  const promise = new Promise( (resolve, reject) => {

    setTimeout(() => {
      // resolve();
      const hero = getHeroById( id );
      ( hero ) ? resolve( hero ) : reject( 'Hero was not found' );
      // reject( 'The hero was not found' );
    }, 1500 );

  });

  return promise;

};
