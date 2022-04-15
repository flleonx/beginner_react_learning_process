
const person = {
  name: 'Tony',
  lastname: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 312312312,
    lat: 14.5323,
    lng: 34.9234,
  }
};

console.log( person );

// const person2 = person; // It points to the same memory address.
const person2 = { ...person };
person2.name = 'Peter';

console.log(person2);
console.log(person);