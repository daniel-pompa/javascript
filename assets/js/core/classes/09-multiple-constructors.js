//* Multiple Constructors

// Define a class called Person
class Person {
  // Constructor for creating a new Person instance
  constructor(name = '', surnames = '', age = 0) {
    this.name = name;
    this.surnames = surnames;
    this.age = age;
  }

  // Static method to create a new Person object from parameters
  static createPerson(name, surnames, age) {
    return new Person(name, surnames, age);
  }

  // Static method to create a new Person object from an object
  static createPersonByObject({ name, surnames, age }) {
    return new Person(name, surnames, age);
  }

  // Method to return information about the Person
  getInfo() {
    return `${this.name} ${this.surnames} tiene ${this.age} años`;
  }
}

// Create a new Person instance 'person1' with specific details and display info
const person1 = new Person('Daniel', 'Pompa Pareja', 49);
console.log(person1.getInfo());

// Create another new Person instance 'person2' with different details and display info
const person2 = Person.createPerson('Emma', 'Ciambrino Baz', 42);
console.log(person2.getInfo());

// Create an object 'gael' with details and use the static method to create a new Person instance 'person3' and display info
const gael = {
  name: 'Gael',
  surnames: 'Pompa Ciambrino',
  age: 2,
};
const person3 = Person.createPersonByObject(gael);
console.log(person3.getInfo());
