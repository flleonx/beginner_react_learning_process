
// const first_array = new Array( 100 ); // It creates an array with 100 empty positions.

const array = [1,2,3,4];

// let array2 = array; // It points to the same memory space;
let array2 = [ ...array, 5 ]; 

const array3 = array2.map( (number) => {
  return number * 2;
});

console.log( array );
console.log( array2 );
console.log( array3 );