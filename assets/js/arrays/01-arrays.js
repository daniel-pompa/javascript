//* Arrays
// Arrays can contain any data type
// Arrays are special objects used to store a collection of data
// They can contain a mixture of different data types and are used to store multiple values in a single variable

// Example array with a mixture of data types
const mixOfDataTypes = [
  'JavaScript',
  20,
  true,
  function () {},
  () => {},
  { name: 'Gael', age: 2 },
  [1, 2, 3, 4],
  ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
];
console.log({ mixOfDataTypes });

// Get the length of the array
console.log(mixOfDataTypes.length);

// Accessing an array element by its position
console.log(mixOfDataTypes[3]);

// Accessing a property of an object in the array
console.log(mixOfDataTypes[5].name);
console.log(mixOfDataTypes[5]['age']);

// Get an element of an array into another array
console.log(mixOfDataTypes[7][2]);

// Arrays can also contain other arrays
const nestedArray = [
  'string',
  20,
  true,
  [1, 2, 3],
  ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  [null, undefined, function () {}, { name: 'Gael', age: 2 }],
];
console.log({ nestedArray });

// Arrays can also contain functions
const functionsArray = [
  function () {
    console.log('Hola desde una función dentro de un array');
  },
  () => {
    console.log('Hola desde una función de flecha dentro de un array');
  },
];
console.log({ functionsArray });

// Accessing a function in an array
functionsArray[0]();
functionsArray[1]();

// Arrays can also contain objects
const objectsArray = [
  { name: 'Daniel Pompa Pareja', age: 49 },
  { name: 'Emma Ciambrino Baz', age: 42 },
  {
    name: 'Gael Pompa Ciambrino',
    age: 2,
    sayHello: function () {
      console.log(`Hola, mi nombre es ${this.name}`);
    },
  },
];
console.log({ objectsArray });

// Accessing an object in an array
console.log(objectsArray[0]);
console.log(objectsArray[1]);
console.log(objectsArray[2]);

// Accessing an object in an array and its property
console.log(objectsArray[1].name);
console.log(objectsArray[1].age);

// Accessing an object in an array and its method
objectsArray[2].sayHello();

// Accessing an object in an array and its method with this
objectsArray[2].sayHello = function () {
  console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} dos años`);
};
objectsArray[2].sayHello();

// Accessing an object in an array and its method with this and a parameter
objectsArray[2].sayHello = function (greeting) {
  console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old`);
};
