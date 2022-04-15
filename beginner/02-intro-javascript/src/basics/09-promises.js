
import { getHeroeById, getHeroeByOwner } from "./basics/08-imp-exp";

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

const getHeroByIdAsync = ( id ) => {

  const promise = new Promise( (resolve, reject) => {

    setTimeout(() => {
      // resolve();
      const hero = getHeroeById(1);
      ( hero ) ? resolve( hero ) : reject( 'Hero was not found' );
      // reject( 'The hero was not found' );
    }, 2000 );

  });

  return promise;

};

getHeroByIdAsync(4)
  // .then( hero => console.log('Hero', hero) )
  .then( console.log )
  // .catch( error => console.log( error ) );
  .catch( console.log ); //It pass the argument to console.log
