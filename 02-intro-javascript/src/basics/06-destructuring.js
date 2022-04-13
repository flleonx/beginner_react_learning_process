
// Destructuring
// Destructuring assignment

const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

const { age, key, name, } = person;

// console.log( person.name);
// console.log( person.age);
// console.log( person.key);

const useContext = ({ key, name, age, range = "Captain" }) => {
  console.log( name, age, range );

  return {
    keyName: key,
    ages: age,
    latlng: {
      lat: 14.324,
      lng: -12.423
    }
  };
};

// Extract nested objects with destructuring operator
const { keyName, ages, latlng:{ lat, lng } } = useContext( person );

console.log( keyName, ages, lat, lng );
