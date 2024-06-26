//* Protected fields
// Protected fields are like private fields, but they can be accessed by subclasses.
// To define a protected field, we use the underscore (_) character before the field name.
// Note: In general, it is not recommended to use protected fields in JavaScript.
// They are not accessible in most cases, and they break encapsulation.
// However, they can be useful in some cases, such as in the context of unit testing.
// In general, it is better to use private fields and protected methods instead.
// For example, we can use protected fields to store the area of a shape, which is calculated in a subclass.
// In this case, the area field is protected, and it can be accessed by the subclass.
// However, it cannot be accessed by other classes or functions outside the class hierarchy.

// Define a parent class Shape
class Shape {
  constructor() {
    this._area = 0;
  }

  get area() {
    return this._area;
  }
}

// Define a subclass Square that extends Shape
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
    this.calculateArea();
  }

  calculateArea() {
    this._area = this.side * this.side;
  }
}

// Define a class Rectangle that extends Shape
class Rectangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
    this.calculateArea();
  }

  calculateArea() {
    this._area = this.base * this.height;
  }
}

// Define a class Triangle that extends Shape
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
    this.calculateArea();
  }

  calculateArea() {
    this._area = (this.base * this.height) / 2;
  }
}

// Define a class Circle that extends Shape
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.calculateArea();
  }

  calculateArea() {
    this._area = Math.PI * this.radius * this.radius;
  }
}

// Check if subclasses can access the area property
console.log("'area' in Square.prototype:", 'area' in Square.prototype);
console.log("'area' in Rectangle.prototype:", 'area' in Rectangle.prototype);
console.log("'area' in Triangle.prototype:", 'area' in Triangle.prototype);
console.log("'area' in Circle.prototype", 'area' in Circle.prototype);

// Expected output:
// 'area' in Square.prototype: true
// 'area' in Rectangle.prototype: true
// 'area' in Triangle.prototype: true
// 'area' in Circle.prototype true

// Test the classes created
// Create instances of different shapes and log their details
const square = new Square(4);
console.log(square);
console.log('Área del cuadrado:', square.area);

const rectangle = new Rectangle(4, 5);
console.log(rectangle);
console.log('Área del rectángulo:', rectangle.area);

const triangle = new Triangle(4, 5);
console.log(triangle);
console.log('Área del triángulo:', triangle.area);

const circle = new Circle(3);
console.log(circle);
console.log('Área del círculo:', circle.area);

// Expected output:
// Área del cuadrado: 16
// Área del rectángulo: 20
// Área del triángulo: 10
// Área del círculo: 28.274333882308138
