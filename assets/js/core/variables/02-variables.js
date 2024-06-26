//* Variable rules
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case sensitive
// Should be written in camelCase

//* Variables - let
// Use let if you need to reassign a variable

// Can be declared and initialized at the same time
let name = 'Daniel';
let surnames = 'Pompa Pareja';
let age = 49;
let isAwesome = false;

// Can be declared without initialized
let fullName;

console.log({ name, surnames, age, isAwesome });

// Reassignment of variables
name = 'Gael';
surnames = 'Pompa Ciambrino';
age = 2;
isAwesome = true;
fullName = `${name} ${surnames}`;

console.log({ name, surnames, age, isAwesome });

console.log({ fullName });
