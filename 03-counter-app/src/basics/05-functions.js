
const greet = function( name ) {
  return `Hello, ${ name }`;
};

const greet2 = ( name ) => {
  return `Hello, ${ name }`;
};

const greet3 = ( name ) => `Hello, ${ name }`;

const greet4 = () => `Hello World`;

export const getUser = () => ({
  uid: 'ABC123',
  username: 'Unknown_0102',
});

export const getUserActive = ( username ) => ({
  uid: 'ABC123',
  username,
});

/*
* Here are listed the different ways to declare and return values from
* functions.
*/
