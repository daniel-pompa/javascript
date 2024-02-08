/**
 * Finds the maximum of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The maximum of a and b
 */
const maxOfTwoNumbers = (a, b) => (a > b ? a : b);

console.log('El número mayor es:', maxOfTwoNumbers(49, 20));

/**
 * Finds the minimum of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The minimum of a and b
 */
const minOfTwoNumbers = (a, b) => (a < b ? a : b);

console.log('El número menor es:', minOfTwoNumbers(49, 41));

/**
 * An array of words
 * @type {string[]}
 */
const words = ['React', 'JavaScript', 'Node', 'HTML5', 'Express', 'CSS3', 'MongoDB'];

/**
 * Finds the longest word in an array
 * @param {string[]} array - The array of words
 * @returns {string} The longest word
 */
const findLongestWord = array => {
  let longestWord = '';
  for (let word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log('La palabra más larga es:', longestWord);
  return longestWord;
};

console.log(words);

findLongestWord(words);

// An array of numbers
const numbers = [48, 40, 1, 29, 31, 20, 23, 26, 2, 19];

console.log(numbers);

/**
 * Sums up the numbers in an array
 * @param {number[]} array - The array of numbers
 * @returns {number} The sum of the numbers
 */
const sumArray = array => {
  if (array.length === 0) {
    return 0; // Return 0 if the array is empty
  }
  const sum = array.reduce((a, b) => a + b); // Use the reduce method to calculate the sum of the numbers
  return sum;
};

console.log(`La suma de los números del array es:`, sumArray(numbers));

// An array of numbers
const averageNumbersArray = [3, 6, 7, 5, 10, 4, 1, 9];

console.log(averageNumbersArray);

/**
 * Calculates the average of numbers in an array
 * @param {number[]} array - The array of numbers
 * @returns {number} The average of the numbers
 */
const averageNumbers = array => {
  if (array.length === 0) {
    return; // Return undefined if the array is empty
  }
  const sum = array.reduce((a, b) => a + b); // Calculate the sum of the numbers using the reduce method
  const average = sum / array.length; // Calculate the average by dividing the sum by the number of elements
  return Number(average.toFixed(1)); // Return the average with one decimal place
};

console.log(`La media de los números del array es:`, averageNumbers(averageNumbersArray));

// An array of technologies
const technologies = [
  'JavaScript',
  'MongoDB',
  'Node',
  'Express',
  'React',
  'JavaScript',
  'JavaScript',
];

console.log(technologies);

/**
 * Counts how many times a word appears in an array
 * @param {string[]} array - The array of words
 * @param {string} word - The word to count
 * @returns {number} The number of times the word appears
 */
const howManyTimes = (array, word) => {
  let counter = 0; // Initialize a counter variable to keep track of the number of occurrences
  if (array.length === 0) {
    return false; // Return false if the array is empty
  }
  array.forEach(w => {
    // Iterate over each word in the array
    if (w === word) {
      counter++; // Increment the counter if the word matches the specified word
    }
  });
  console.log(`La palabra ${word} aparece ${counter} veces`); // Display the result
  return counter; // Return the number of times the word appears
};

howManyTimes(technologies, 'JavaScript');
