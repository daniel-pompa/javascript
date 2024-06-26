//* Singleton Pattern
// A singleton is a unique instance of the class.
// In other words, a singleton is an object that can have only one instance (object) of itself.
// If you try to create another instance, the constructor will return the same instance.
// In practice, singletons are useful when exactly one object is needed to coordinate others across a system.
// The singleton pattern is popular in OOP, but it is also used in other paradigms, such as functional programming.
// The singleton pattern is implemented by creating a class with a method that creates a new instance of the class if one doesn't exist.
// In the event of an instance already existing, it simply returns a reference to that object.

class Singleton {
  static instance; // undefined

  constructor(name = '') {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.name = name;
  }
}

const instance1 = new Singleton('Gael');
const instance2 = new Singleton('Daniel');
const instance3 = new Singleton('Emma');

console.log('Nombre en la instacia 1 es:', instance1.name);
console.log('Nombre en la instacia 2 es:', instance2.name);
console.log('Nombre en la instacia 3 es:', instance3.name);
