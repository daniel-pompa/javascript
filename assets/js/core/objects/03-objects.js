//* Objects
// The objects are collections of properties and methods
// Properties are variables attached to the object
// Methods are functions attached to the object
// Objects are key-value pairs
// The key is the name of the property
// The value is the value of the property

//* Object destructuring
// The destructuring is a way to extract values from objects or arrays and assign them to variables

// Original code
const learning = {
  technology: 'JavaScript',
  framework: 'React',
  duration: '3 meses',
};

console.log({ learning });

// Refactored code
const { technology, framework, duration } = learning;

console.log({ technology, framework, duration });

//* Destructuring with two or more objects
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
const { name, price, available } = product;
const { name: customerName, email, premium } = customer;

console.log({ name, price, available });
console.log({ customerName, email, premium });
