//* Objects
// The objects are collections of properties and methods
// Properties are variables attached to the object
// Methods are functions attached to the object
// Objects are key-value pairs
// The key is the name of the property
// The value is the value of the property

//* Joining two or more objects
// We can join two or more objects using the spread operator

// Example
// We have two objects, product and customer
// We want to join them into a new object called newObject
// We use the spread operator to join the objects

// Original code
const product = {
  name: 'PC Workstation',
  price: 2500,
  available: true,
};

console.log({ product });

const customer = {
  name: 'Daniel',
  email: 'daniel.pompa@gmail.com',
  premium: false,
};

console.log({ customer });

// Refactored code
const newObject = {
  product: { ...product },
  customer: { ...customer },
};

console.log({ newObject });
