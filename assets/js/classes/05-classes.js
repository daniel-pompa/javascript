//* Private properties
// The private properties are declared using the # symbol.
// These properties are only accessible within the class.
// They cannot be accessed or modified from outside the class.

// Define the Square class
class Square {
  #area; // Private property to store the calculated area

  // Constructor for the Square class
  constructor(side = 0) {
    this.side = side;
    this.#area = Math.pow(this.side, 2); // Calculate and assign the area to the private property
  }

  // Method to calculate and return the area
  calculateArea() {
    return this.#area;
  }
}

// Define the Rectangle class
class Rectangle {
  #area; // Private property to store the calculated area

  // Constructor for the Rectangle class
  constructor(width = 0, height = 0) {
    this.width = width;
    this.height = height;
    this.#area = width * height; // Calculate and assign the area to the private property
  }

  // Method to calculate and return the area
  calculateArea() {
    return this.#area;
  }
}

// Define the Triangle class
class Triangle {
  #area; // Private property to store the calculated area

  // Constructor for the Triangle class
  constructor(base = 0, height = 0) {
    this.base = base;
    this.height = height;
    this.#area = (base * height) / 2; // Calculate and assign the area to the private property
  }

  // Method to calculate and return the area
  calculateArea() {
    return this.#area;
  }
}

// Define the Circle class
class Circle {
  #area; // Private property to store the calculated area

  // Constructor for the Circle class
  constructor(radius = 0) {
    this.radius = radius;
    this.#area = Math.PI * radius * radius; // Calculate and assign the area to the private property
  }

  // Method to calculate and return the area
  calculateArea() {
    return this.#area;
  }
}

// Test the classes created
// Create an instance of the Square class
const square = new Square(4);
console.log(square);
console.log('Área del cuadrado:', square.calculateArea());

// Create an instance of the Rectangle class
const rectangle = new Rectangle(4, 5);
console.log(rectangle);
console.log('Área del rectángulo:', rectangle.calculateArea());

// Create an instance of the Triangle class
const triangle = new Triangle(4, 5);
console.log(triangle);
console.log('Área del triángulo:', triangle.calculateArea());

// Create an instance of the Circle class
const circle = new Circle(3);
console.log(circle);
console.log('Área del círculo:', circle.calculateArea());

// Expected output:
// Square {side: 4, #area: 16}
// Área del cuadrado: 16
// Rectangle {width: 4, height: 5, #area: 20}
// Área del rectángulo: 20
// Triangle {base: 4, height: 5, #area: 10}
// Área del triángulo: 10
// Circle {radius: 3, #area: 28.274333882308138}
// Área del círculo: 28.274333882308138
