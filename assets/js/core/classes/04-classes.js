//* Inheritance
// The inheritance refers to the ability of a class to inherit properties and methods from another class.
// This allows for code reuse and helps to organize code in a logical way.
// Inheritance is achieved using the "extends" keyword in JavaScript.
// This keyword allows a child class to inherit from a parent class.
// The child class can then access the properties and methods of the parent class, as well as define its own properties and methods.
// This is known as the "is-a" relationship, where the child class is a type of the parent class.
// Inheritance is an important concept in object-oriented programming.
// The inheritance is used to create hierarchies of classes that share common properties and methods.
// It helps to reduce code duplication and makes it easier to maintain and extend code.

// Define the Person class
class Person {
  // Constructor to initialize the properties of the person
  constructor(name = '', surnames = '', age = 0, email = null) {
    this._name = name;
    this._surnames = surnames;
    // Check if the age is less than 0
    if (age < 0) {
      // If it is, throw an error with a specific message
      throw new Error('La edad no puede ser un valor negativo');
    }
    this._age = age;
    // Define the regular expression to validate the email
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Check if the email is null or empty
    if (!email || !EMAIL_REGEX.test(email)) {
      // If it is, throw an error with a specific message
      throw new Error('El e-mail no tiene un formato válido');
    }
    this._email = email;
  }

  //* Getters
  // The get method is used to retrieve the value of a property
  get name() {
    return this._name;
  }
  get surnames() {
    return this._surnames;
  }
  get age() {
    return this._age;
  }
  get email() {
    return this._email;
  }

  //* Setters
  // The set method is used to set the value of a property
  set name(name) {
    this._name = name;
  }
  set surnames(surnames) {
    this._surnames = surnames;
  }
  set age(age) {
    // Check if the age is less than 0
    if (age < 0) {
      // If it is, throw an error with a specific message
      throw new Error('La edad no puede ser un valor negativo');
    }
    this._age = age;
  }
  set email(email) {
    this._email = email;
  }

  //* Methods
  // Method to log a greeting message with the name of the person
  sayHello() {
    console.log(`Hola, mi nombre es ${this.name}`);
  }

  // Method to show the data of the person
  showData() {
    console.log(`Nombre: ${this.name}`);
    console.log(`Apellidos: ${this.surnames}`);
    console.log(`Edad: ${this.age}`);
    console.log(`Correo electrónico: ${this.email}`);
  }
}

//* Inheritance - Developer class
// The Developer class extends the Person class, inheriting its properties and methods.
// It adds additional properties and methods specific to developers.
class Developer extends Person {
  constructor(
    name = '',
    surnames = '',
    age = 0,
    email = '',
    profession = '',
    languages = [],
    frontEnd = [],
    backEnd = []
  ) {
    // The super() method calls the constructor of the parent class (Person) and passes the necessary arguments
    super(name, surnames, age, email);
    this._profession = profession;
    this._languages = languages;
    this._frontEnd = frontEnd;
    this._backEnd = backEnd;
  }

  //* Getters
  // The get method is used to retrieve the value of a property
  get profession() {
    return this._profession;
  }
  get languages() {
    return this._languages;
  }
  get frontEnd() {
    return this._frontEnd;
  }
  get backEnd() {
    return this._backEnd;
  }

  //* Setters
  // The set method is used to set the value of a property
  set profession(profession) {
    this._profession = profession;
  }
  set languages(languages) {
    // Check if languages is not an array
    if (!Array.isArray(languages)) {
      // Throw an error if languages is not an array
      throw new Error('Los lenguajes de programación deben ser un array');
    }
    this._languages = languages;
  }
  set frontEnd(frontEnd) {
    // Check if frontEnd is not an array
    if (!Array.isArray(frontEnd)) {
      // Throw an error if frontEnd is not an array
      throw new Error('Las tecnologías front-end debe ser un array');
    }
    this._frontEnd = frontEnd;
  }
  set backEnd(backEnd) {
    // Check if backEnd is not an array
    if (!Array.isArray(backEnd)) {
      // Throw an error if backEnd is not an array
      throw new Error('Las tecnologías back-end debe ser un array');
    }
    this._backEnd = backEnd;
  }

  //* Methods
  // Method to log a greeting message with the name of the developer
  sayHello() {
    console.log(`Hola, mi nombre es ${this.name}`);
  }

  // Method to show the data of the developer
  showData() {
    console.log(
      '%cDatos del desarrollador',
      'color:#1e40af; text-transform:uppercase; font-weight: bold'
    );
    super.showData();
    console.log(`Profesión: ${this.profession}`);
    console.log('Lenguajes de programación:', this.languages);
    console.log('Tecnologías front-end:', this.frontEnd);
    console.log('Tecnologías back-end:', this.backEnd);
  }
}

// Create a new instance of the Developer class
const developer = new Developer(
  'Daniel',
  'Pompa Pareja',
  49,
  'daniel.pompa@gmail.com',
  'Desarrollador MERN Stack',
  ['JavaScript', 'TypeScript'],
  ['HTML5', 'CSS3', 'React.js', 'Redux', 'Bootstrap', 'Tailwind CSS'],
  ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM']
);

developer.sayHello();
developer.showData();
