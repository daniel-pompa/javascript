//* Properties, gets and static methods
// Static methods are called without instantiating their class.
// They are typically used for creating utility functions.

// Define the Person class
class Person {
  // Define a static property to keep track of the number of instances
  static numberOfInstances = 0;

  // Define a static getter to get the number of instances
  static get instances() {
    return Person.numberOfInstances;
  }

  // Define a static method to log a message
  static message() {
    console.log('Hola, soy un método estático');
  }

  // Define a constructor to initialize the instance properties
  constructor(name = '', surnames = '', age = 0, email = '') {
    // Set the instance properties based on the provided arguments
    this._name = name;
    this._surnames = surnames;
    // Check if age is negative
    if (age < 0) {
      // If it is, throw an error with a specific message
      throw new Error('La edad no puede ser un valor negativo');
    }
    this._age = age;
    this._email = email;
    // Increment the numberOfInstances property
    Person.numberOfInstances++;
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
    const emailMessage = this.email
      ? `Correo electrónico: ${this.email}`
      : 'No tiene correo electrónico';
    console.log(emailMessage);
  }
}

// Create a new instance of the Person class
const daniel = new Person('Daniel', 'Pompa Pareja', 49, 'daniel.pompa@gmail.com');
console.log(daniel);
daniel.showData();

// Create a new instance of Person with different values
const emma = new Person('Emma', 'Ciambrino Baz', 42, 'emma.ciambrino@gmail.com');
console.log(emma);
emma.showData();

// Create a new instance of Person with different values
const gael = new Person('Gael', 'Pompa Ciambrino', 2);
console.log(gael);
gael.showData();

// Print the number of instances of the Person class
console.log('Número de instancias de la clase Persona:', Person.numberOfInstances);
console.log('Número de instancias de la clase Persona:', Person.instances);

// Call the static method message of the Person class
Person.message();
