//* Function Declaration

/**
 * This function greets a person with an optional message and nam
 * @param {string} [message='Hola mundo!'] - The greeting message
 * @param {string} [name=''] - The name of the person being greete
 */
function greeting(message = 'Hola mundo!', name = '') {
  console.log(`${message} ${name}`);
}

greeting();
greeting('Hola', 'Gael');

/**
 * This function adds two numbers and logs the result
 * @param {number} a - The first number to be added
 * @param {number} b - The second number to be added
 * @returns {number} The sum of the two numbers
 */
function sum(a, b) {
  const sum = a + b;
  return sum;
}

/**
 * This function subtracts two numbers and logs the difference
 * @param {number} a - The minuend
 * @param {number} b - The subtrahend
 * @returns {number} The difference between 'a' and 'b'
 */
function subtract(a, b) {
  const difference = a - b;
  return difference;
}

/**
 * This function multiplies two numbers and logs the result
 * @param {number} a - The first number to be multiplied
 * @param {number} b - The second number to be multiplied
 * @returns {number} The product of the two numbers
 */
function multiply(a, b) {
  const product = a * b;
  return product;
}

/**
 * This function divides two numbers and logs the result
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The quotient of the division
 */
function divide(a, b) {
  const result = a / b;
  if (a % b === 0) {
    return result;
  }
  return result.toFixed(1);
}

/**
 * This function calculates the square root of a number and logs the result
 * @param {number} a - The number to calculate the square root of
 * @returns {number} The square root of the number
 */
function squareRoot(a) {
  const squareRoot = Math.sqrt(a);
  return squareRoot;
}

/**
 * This function calculates the power of a number and logs the result
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} The result of the power operation
 */
function pow(base, exponent) {
  const result = Math.pow(base, exponent);
  return result;
}

/**
 * Calculates the percentage of a number and logs the result
 * @param {number} percentage - The percentage to calculate
 * @param {number} number - The number to calculate the percentage of
 * @returns {number} The calculated percentage value
 */
function calculatePercentage(percentage, number) {
  const result = (percentage * number) / 100;
  return result;
}

/**
 * Calculates the factorial of a given number
 * @param {number} a - The number to calculate the factorial of
 * @returns {number} The factorial of the given number
 * @throws {Error} - If the number is negative
 */
function factorial(a) {
  if (a < 0) {
    throw new Error('El número no puede ser negativo');
  }
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
}

/**
 * Performs various mathematical operations based on the provided operation string
 * @param {string} operation - The operation to perform
 * @param {number} a - The first operand
 * @param {number} b - The second operand
 * @returns {number|undefined} The result of the operation, or undefined if the operation is invalid
 */
function performOperation(operation = '', a, b) {
  // Create an object called 'operations' that maps the operation strings to their respective functions
  const operations = {
    '+': sum,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '√': squareRoot,
    '^': pow,
    '%': calculatePercentage,
    '!': factorial,
  };

  // Check if the provided operation is a valid operation by using the 'in' operator to check if it exists in the 'operations' object
  if (operation in operations) {
    // If the operation is valid
    // Call the corresponding function using the operation as the key in the 'operations' object and pass in the operands 'a' and 'b'
    return operations[operation](a, b);
  } else {
    // If the operation is invalid, log an error message to the console
    console.log('Operación no válida');
    // Return undefined to indicate an invalid operation
    return undefined;
  }
}

// Test the functions
const a = 10;
const b = 5;

console.log(`${a} + ${b} =`, performOperation('+', a, b));
console.log(`${a} - ${b} =`, performOperation('-', a, b));
console.log(`${a} * ${b} =`, performOperation('*', a, b));
console.log(`${a} / ${b} =`, performOperation('/', a, b));
console.log(`√${a} =`, performOperation('√', b));
console.log(`${a} ^ ${b} =`, performOperation('^', a, b));
console.log(`${b}% de ${a} =`, performOperation('%', a, b));
console.log(`${a}! =`, performOperation('!', a, b));
console.log(performOperation('?', a, b));
