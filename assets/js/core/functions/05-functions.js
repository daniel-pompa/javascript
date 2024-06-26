/**
 * Generates a random number between two values
 * @param {number} a - The minimum value
 * @param {number} b - The maximum value
 * @returns {number} A random number between a and b (inclusive)
 */
const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

/**
 * Generates a lottery combination of unique numbers within a specified range
 * @param {number} min - The minimum value of the range
 * @param {number} max - The maximum value of the range
 * @param {number} amount - The amount of numbers to generate
 * @returns {number[]} An array of unique numbers in ascending order
 */
const generateLotteryCombination = (min, max, amount) => {
  const combination = new Set();
  while (combination.size < amount) {
    const randomNumber = random(min, max);
    combination.add(randomNumber);
  }
  return Array.from(combination).sort((a, b) => a - b);
};

/**
 * Generates a specified amount of unique random numbers within a specified range
 * @param {number} min - The minimum value of the range
 * @param {number} max - The maximum value of the range
 * @param {number} amount - The amount of numbers to generate
 * @returns {number[]} An array of unique numbers in ascending order
 */
const generateComplementaryNumber = (min, max, amount) => {
  const numbers = new Set();
  while (numbers.size < amount) {
    numbers.add(random(min, max));
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

const primitiveCombination = generateLotteryCombination(1, 49, 6);
const complementaryNumber = generateComplementaryNumber(0, 9, 1);
const euromillionsCombination = generateLotteryCombination(1, 50, 5);
const euromillionsStars = generateComplementaryNumber(1, 12, 2);
const bonolotoCombination = generateLotteryCombination(1, 49, 6);

console.log(
  '%cLotería Primitiva',
  'color:#1e40af; text-transform: uppercase; font-weight: bold'
);
console.log('Combinación:', primitiveCombination);
console.log('Número complementario:', complementaryNumber);

console.log(
  '%cEuromillones',
  'color:#1e40af; text-transform: uppercase; font-weight: bold'
);
console.log('Combinación:', euromillionsCombination);
console.log('Estrellas:', euromillionsStars);

console.log('%cBonoloto', 'color:#1e40af; text-transform: uppercase; font-weight: bold');
console.log('Combinación:', bonolotoCombination);
