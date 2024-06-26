/**
 * Generates a random number between two values
 * @param {number} a - The minimum value
 * @param {number} b - The maximum value
 * @returns {number} A random number between a and b (inclusive)
 */
const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

/**
 * Generates a lottery combination of 6 unique numbers between 1 and 49 (inclusive)
 * @returns {number[]} An array of 6 unique numbers in ascending order
 */
const generateLotteryCombination = () => {
  // Create a new Set to store the combination of numbers
  const combination = new Set();

  // Keep generating random numbers until the combination has 6 unique numbers
  while (combination.size < 6) {
    const randomNumber = random(1, 49);
    combination.add(randomNumber);
  }

  // Convert the combination set back to an array and sort it in ascending order
  return Array.from(combination).sort((a, b) => a - b);
};

/**
 * Generates a random number between 0 and 9 (inclusive)
 * This number is used as the complementary number in the lottery
 * @returns {number} A random number between 0 and 9
 */
const generateComplementaryNumber = () => {
  // Generate a random number between 0 and 9 using the random function
  const complementaryNumber = random(0, 9);

  // Return the generated complementary number
  return complementaryNumber;
};

const lotteryCombination = generateLotteryCombination();
const complementaryNumber = generateComplementaryNumber();

console.log(
  '%cCombinación Lotería Primitiva',
  'color:#1e40af; text-transform: uppercase; font-weight: bold'
);
console.log('Combinación:', lotteryCombination);
console.log('Número complementario:', complementaryNumber);
