//* Getters and Setters
// Getters and setters are methods that allow to read and write the value of a property, respectively.
// They are used to control the access to the properties of an object.
// They are useful to validate the data that is assigned to the properties of an object.

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
    this._email = email || '';
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

// Create a new instance of Person with initial values
const person = new Person('Daniel', 'Pompa Pareja', 49);

console.log(person);

// Call the sayHello method on the person object
person.sayHello();

// We can use setters to set the values of the properties
person.email = 'daniel.pompa@gmail';

// We can use methods to show the data of the person
person.showData();

//* We can use getters to get the values of the properties
// console.log(person.name);
// console.log(person.surnames);
// console.log(person.age);
// console.log(person.email);
