//* Singleton Pattern
// A singleton is a unique instance of the class.
// In other words, a singleton is an object that can have only one instance (object) of itself.
// If you try to create another instance, the constructor will return the same instance.
// In practice, singletons are useful when exactly one object is needed to coordinate others across a system.
// The singleton pattern is popular in OOP, but it is also used in other paradigms, such as functional programming.
// The singleton pattern is implemented by creating a class with a method that creates a new instance of the class if one doesn't exist.
// In the event of an instance already existing, it simply returns a reference to that object.

class MongoConnection {
  constructor(connectionString) {
    if (!MongoConnection.instance) {
      this.connectionString = connectionString;
      this.isConnected = false;
      MongoConnection.instance = this;
    }
    return MongoConnection.instance;
  }

  connect() {
    if (this.isConnected) {
      console.log('Ya se ha conectado a la base de datos');
      return;
    }

    // Simulate connection to MongoDB
    console.log(`Conexión a la base de datos en ${this.connectionString}...`);
    this.isConnected = true;
    console.log('Conectado a la base de datos');
  }

  disconnect() {
    if (!this.isConnected) {
      console.log('Ya se ha desconectado de la base de datos');
      return;
    }

    // Simulate disconnection from MongoDB
    console.log('Desconexión de la base de datos...');
    this.isConnected = false;
    console.log('Desconectado de la base de datos');
  }
}

// Usage example
const dbConnection1 = new MongoConnection('mongodb://localhost:27017/database');
dbConnection1.connect();

const dbConnection2 = new MongoConnection('mongodb://localhost:27017/anotherdatabase');
dbConnection2.connect(); // This will not create a new connection

console.log(
  'Cadena de conexión de la primera instancia:',
  dbConnection1.connectionString
);
console.log(
  'Cadena de conexión de la segunda instancia:',
  dbConnection2.connectionString
);

console.log(
  '¿Son ambas conexiones de la misma instancia?',
  dbConnection1 === dbConnection2
); // true

dbConnection1.disconnect();
dbConnection2.disconnect(); // This will not actually disconnect since it is already disconnected
