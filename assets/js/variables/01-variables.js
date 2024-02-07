//* Variable rules
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case sensitive
// Should be written in camelCase

//* Variables - var
// Don't use var
// The use of var in JavaScript is not recommended
// Use var only if you need to support older browsers
// Use let or const instead

// Can be declared multiple times
var name = 'Daniel';
var name = 'Gael';

console.log(name); // prints 'Gael'

// Can be declared and initialized at the same time
var name = 'Daniel';
var surnames = 'Pompa Pareja';
var age = 49;
var isAwesome = false;

console.log({ name, surnames, age, isAwesome }); // prints an object with the values of the variables

// Can be declared without initialized
var fullName;

// Reassignment of variables
name = 'Gael';
surnames = 'Pompa Ciambrino';
age = 2;
isAwesome = true;
fullName = `${name} ${surnames}`;

console.log({ name, surnames, age, isAwesome, fullName }); // prints an object with the updated values of the variables
