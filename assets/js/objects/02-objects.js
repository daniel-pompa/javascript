//* Objects
// The objects are collections of properties and methods
// Properties are variables attached to the object
// Methods are functions attached to the object
// Objects are key-value pairs
// The key is the name of the property
// The value is the value of the property

//* Object handling
// The object is a constant, but the properties can be modified
// The object can be modified, but not reassigned
// The properties of an object can be modified, but not the object itself

//* Useful objects methods
// Object.freeze(object) -> prevents the object from being modified
// Object.isFrozen(object) -> determines if an object is frozen
// Object.seal(object) -> prevents the addition of new properties and the deletion of existing ones
// Object.isSealed(object) -> determines if an object is sealed
// Object.getOwnPropertyNames(object) -> returns an array containing all property names of an object
// Object.values(object) -> returns an array containing all values corresponding to properties
// Object.entries(object) -> returns an array containing all the [key, value] pairs of the properties

// Object examples
const product = {
  name: 'PC Basic',
  price: 800,
  available: false,
};

// Modify the properties of an object
product.name = 'PC Workstation';
product.price = 2500;
product.available = true;

// Add properties to an object
product.image = 'image.jpg';

console.log(product);

// Delete properties of an object
delete product.image;

console.log(product);

// Object that can't be modified
const person = Object.freeze({
  name: 'Daniel',
  surnames: 'Pompa Pareja',
  age: 49,
  email: 'daniel.pompa@gmail.com',
});

// Determines if an object is frozen
const isFrozen = Object.isFrozen(person);

console.log({ isFrozen });

// Try to modify properties of a frozen object (should not be possible)
person.name = 'Óscar';
person.age = 44;
person.email = 'oscar.pompa@gmail.com';
person.phone = '648 11 99 47';
delete person.email;

console.log(person);

// Returns an array containing all property names
const properties = Object.getOwnPropertyNames(person);

console.log({ properties });

// Returns an array containing all values corresponding to properties
const values = Object.values(person);

console.log({ values });

// Returns an array containing all the [key, value] pairs of the properties
const keyValue = Object.entries(person);

console.log({ keyValue });

// Allow modification of existing properties, but not delete or add new properties
const student = {
  name: 'Carmen',
  surnames: 'Ciambrino Baz',
  age: 37,
  email: 'carmen.ciambrino@gmail.com',
};

console.log(student);

Object.seal(student);

// Determines if an object is sealed
const isSealed = Object.isSealed(student);

console.log({ isSealed });

// Try to modify properties of a sealed object (should be possible)
student.name = 'Emma';
student.age = 42;
student.email = 'emma.ciambrino@gmail.com';
student.phone = '669 97 90 20';
delete student.email;

console.log(student);
