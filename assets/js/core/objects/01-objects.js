//* Objects
// The objects are collections of properties and methods
// Properties are variables attached to the object
// Methods are functions attached to the object
// Objects are key-value pairs
// The key is the name of the property
// The value is the value of the property

// Object Literal
const gael = {
  name: 'Gael',
  surnames: 'Pompa Ciambrino',
  age: 2,
  friends: ['Noa', 'Luca', 'Leo'],
};

console.log(gael);

// Object constructor
const emma = new Object();

// Adding properties to object
// Dot notation
emma.name = 'Emma';
emma.surnames = 'Ciambrino Baz';
emma.age = 42;
emma.email = 'emma.ciambrino@gmail.com';
emma.address = {
  street: 'Calle falsa 20',
  city: 'Madrid',
};
emma.sons = [gael];

console.log(emma);

// Adding Methods to Object
const daniel = {
  name: 'Daniel',
  surnames: 'Pompa Pareja',
  age: 49,
  email: 'daniel.pompa@gmail.com',
  address: {
    street: 'Calle falsa 20',
    city: 'Madrid',
  },
  profession: 'Desarrollador MERN Stack',
  technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  available: true,
  sons: [gael],
  // Greeting method of person object
  greeting: function () {
    console.log(`Hola, mi nombre es ${this.name}`);
  },
  // Info method of person object
  info: function () {
    console.log(`Nombre completo: ${this.name} ${this.surnames}`);
    console.log(`Correo electrónico: ${this.email}`);
    console.log(`Dirección: ${this.address.street}, ${this.address.city}`);
    console.log(`Hijos: ${this.sons[0].name} ${this.sons[0].surnames}`);
    console.log(`Profesión: ${this.profession}`);
  },
  // Method to print the technologies the person is proficient in
  printTechnologies: function () {
    this.technologies.toString();
    console.log('Tecnologías:', this.technologies.join(' - '));
  },
};

console.log(daniel);

daniel.greeting();
daniel.info();
daniel.printTechnologies();
