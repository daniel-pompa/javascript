//* Arrow Functions

/**
 * Adds two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
const sum = (a, b) => a + b;

/**
 * Subtracts two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The difference between a and b
 */
const subtract = (a, b) => a - b;

/**
 * Multiplies two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The product of a and b
 */
const multiply = (a, b) => a * b;

/**
 * Divides two numbers.
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {string} The quotient of a divided by b, rounded to 2 decimal places
 */
const divide = (a, b) => (a / b).toFixed(2);

/**
 * Calculates the square root of a number
 * @param {number} n - The number
 * @returns {number} The square root of n
 */
const squareRoot = n => Math.sqrt(n);

/**
 * Generates a random number between two values
 * @param {number} a - The minimum value
 * @param {number} b - The maximum value
 * @returns {number} A random number between a and b (inclusive)
 */
const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

/**
 * Calculates the power of a number
 * @param {number} n - The base number
 * @param {number} p - The power
 * @returns {number} The result of raising n to the power of p
 */
const pow = (n, p) => Math.pow(n, p);

/**
 * Calculates the square of a number
 * @param {number} n - The number
 * @returns {number} The square of n
 */
const square = n => n * n;

/**
 * Calculates the factorial of a given number
 *
 * @param {number} n - The number to calculate the factorial of
 * @returns {number} - The factorial of the given number
 * @throws {Error} - If the number is negative
 */
const factorial = n => {
  if (n < 0) {
    throw new Error('El número no puede ser negativo');
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Test the functions
const a = 10;
const b = 3;
const c = 1;
const d = 49;

console.log(`${a} + ${b} =`, sum(a, b));
console.log(`${a} - ${b} =`, subtract(a, b));
console.log(`${a} * ${b} =`, multiply(a, b));
console.log(`${a} / ${b} =`, divide(a, b));
console.log(`Raíz cuadrada de ${a} =`, squareRoot(a));
console.log(`Número aleatorio entre ${c} y ${d} =`, random(c, d));
console.log(`${a} a la potencia de ${b} =`, pow(a, b));
console.log(`Cuadrado de ${a} =`, square(a));
console.log(`El factorial de ${a} es:`, factorial(a));

/**
 * Generates a lottery combination of 6 unique numbers between 1 and 49
 * @returns {number[]} An array of 6 unique numbers in ascending order
 */
const generateLotteryCombination = () => {
  // Create a new Set to store the combination of numbers
  const combination = new Set();

  // Keep generating random numbers until the combination has 6 unique numbers
  while (combination.size < 6) {
    // Generate a random number between 1 and 49 (inclusive)
    const randomNumber = Math.floor(Math.random() * 49) + 1;

    // Add the random number to the combination set
    combination.add(randomNumber);
  }

  // Convert the combination set back to an array and sort it in ascending order
  return Array.from(combination).sort((a, b) => a - b);
};

const lotteryCombination = generateLotteryCombination();

console.log(lotteryCombination);
