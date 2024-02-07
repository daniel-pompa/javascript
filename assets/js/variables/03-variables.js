//* Variable rules
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case sensitive
// Should be written in camelCase

//* Variables - const
// Use const by default
// Use let only if the value needs to change

const name = 'Gael';
const surnames = 'Pompa Ciambrino';
const age = 2;
const fullName = `${name} ${surnames}`;
const isAwesome = true;

// const declarations must be initialized
// const kindergarten;

// Can't be reassigned
// name = "Daniel";
// surnames = 'Pompa Pareja';
// fullName = `${name} ${surnames}`;
// age = 49;

console.log({ name, surnames, age, fullName, isAwesome });
