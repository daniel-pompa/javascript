//* JavaScript classes
// Classes are a template for creating objects.
// They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

// Define the Person class
class Person {
  // Constructor to initialize the name, surnames, and age properties
  constructor(name, surnames, age) {
    this.name = name;
    this.surnames = surnames;
    this.age = age;
  }

  // Method to log a greeting message with the name and age of the person
  sayHello() {
    console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
  }

  // Method to log the full name of the person
  getFullName() {
    return `${this.name} ${this.surnames}`;
  }
}

// Create a new instance of Person with the name, surnames, and age values
const daniel = new Person('Daniel', 'Pompa Pareja', 49);
console.log(daniel);
daniel.sayHello();

// Create a new instance of Person with different values
const emma = new Person('Emma', 'Ciambrino Baz', 42);
console.log(emma);
emma.sayHello();

// Create a new instance of Person with different values
const gael = new Person('Gael', 'Pompa Ciambrino', 2);
console.log(gael);
gael.sayHello();
