//* Multiple Constructors

// Define a class called Person
class Person {
  // Static method to create a new Person object from an object
  static createPersonByObject({ name, surnames, age }) {
    return new Person(name, surnames, age);
  }

  // Constructor for creating a new Person instance
  constructor(name = '', surnames = '', age = 0) {
    this.name = name;
    this.surnames = surnames;
    this.age = age;
  }

  // Method to display information about the Person
  getInfo() {
    console.log(`${this.name} ${this.surnames} tiene ${this.age} años`);
  }
}

// Create a new Person instance 'person1' with specific details and display info
const person1 = new Person('Daniel', 'Pompa Pareja', 49);
person1.getInfo();

// Create another new Person instance 'person2' with different details and display info
const person2 = new Person('Emma', 'Ciambrino Baz', 42);
person2.getInfo();

// Create an object 'gael' with details and use the static method to create a new Person instance 'person3' and display info
const gael = {
  name: 'Gael',
  surnames: 'Pompa Ciambrino',
  age: 2,
};
const person3 = Person.createPersonByObject(gael);
person3.getInfo();
