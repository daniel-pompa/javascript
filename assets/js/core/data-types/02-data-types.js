//* Non-primitive Data Types
// Object: a collection of key-value pairs
// Array: a collection of values
// Function: a block of code that performs a specific task
// Set: a collection of unique values
// WeakSet: a collection of objects, and is not iterable
// Map: a collection of key-value pairs that can be accessed by their keys
// WeakMap: a collection of key-value pairs whose keys must be objects with values of any data type

// Object
const mySon = {
  name: 'Gael',
  surnames: 'Pompa Ciambrino',
  age: 2,
  birthday: new Date('2022-03-22').toLocaleDateString(),
  isAwesome: true,
  friends: ['Noa', 'Luca', 'Leo'],
};

console.log(mySon, typeof mySon);

// Array
const friends = mySon.friends;
console.log({ friends }, typeof friends);

// Function
const helloWorld = () => {
  console.log('Hola mundo!');
};

console.log({ helloWorld }, typeof helloWorld);

helloWorld();

// Set
const languages = new Set(['JavaScript', 'TypeScript']);
console.log({ languages }, typeof languages);
console.log('languages.size', languages.size);
console.log('languages.has("JavaScript")', languages.has('JavaScript'));

const numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
console.log({ numbers }, typeof numbers);

const noDuplicates = new Set(numbers);
console.log({ noDuplicates }, typeof noDuplicates);

// WeakSet
const myWife = {
  name: 'Emma',
  surnames: 'Ciambrino Baz',
  age: 42,
};

const weakSet = new WeakSet([myWife, mySon]);
console.log(weakSet);
console.log({ weakSet }, typeof weakSet);
console.log('weakSet.has(mySon)', weakSet.has(mySon));
console.log('weakSet.has(myWife)', weakSet.has(myWife));

// Map
const myMap = new Map([
  ['name', 'Daniel'],
  ['surnames', 'Pompa Pareja'],
  ['age', 49],
]);

console.log(myMap);
console.log({ myMap }, typeof myMap);
console.log('myMap.size', myMap.size);
console.log('myMap.has("name")', myMap.has('name'));

// WeakMap
const myWeakMap = new WeakMap([
  [mySon, 'son'],
  [myWife, 'wife'],
]);

console.log(myWeakMap);
console.log({ myWeakMap }, typeof myWeakMap);
console.log('myWeakMap.has(mySon)', myWeakMap.has(mySon));
console.log('myWeakMap.has(myWife)', myWeakMap.has(myWife));
