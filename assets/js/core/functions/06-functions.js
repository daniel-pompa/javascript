/**
 * Finds the maximum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The maximum of a and b.
 */
const maxOfTwoNumbers = (a, b) => (a > b ? a : b);

console.log('El número mayor es:', maxOfTwoNumbers(49, 20));

/**
 * Finds the minimum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The minimum of a and b.
 */
const minOfTwoNumbers = (a, b) => (a < b ? a : b);

console.log('El número menor es:', minOfTwoNumbers(49, 42));

// Array of words
const words = ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'];

/**
 * Finds the longest word in an array of words.
 * @param {string[]} array - The array of words.
 * @returns {string} The longest word in the array.
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

// Array of numbers
const numbers = [49, 42, 1, 29, 31, 20, 23, 26, 2, 19];

console.log(numbers);

/**
 * Sums the numbers in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number} The sum of the numbers in the array.
 */
const sumArray = array => {
  if (array.length === 0) {
    return 0; // Return 0 if the array is empty.
  }
  const sum = array.reduce((a, b) => a + b); // Use the reduce method to calculate the sum of the numbers.
  return sum;
};

console.log(`La suma de los números del array es:`, sumArray(numbers));

// Array of numbers for averaging
const averageNumbersArray = [3, 6, 7, 5, 10, 4, 1, 9];

console.log(averageNumbersArray);

/**
 * Calculates the average of numbers in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number} The average of the numbers in the array.
 */
const averageNumbers = array => {
  if (array.length === 0) {
    return; // Return undefined if the array is empty.
  }
  const sum = array.reduce((a, b) => a + b); // Calculate the sum of the numbers using the reduce method.
  const average = sum / array.length; // Calculate the average by dividing the sum by the number of elements.
  return Number(average.toFixed(1)); // Return the average with one decimal place.
};

console.log(`La media de los números del array es:`, averageNumbers(averageNumbersArray));

// Array of technologies
const technologies = [
  'JavaScript',
  'MongoDB',
  'Node.js',
  'Express.js',
  'React',
  'JavaScript',
];

console.log(technologies);

/**
 * Counts how many times a word appears in an array.
 * @param {string[]} array - The array of words.
 * @param {string} word - The word to count.
 * @returns {number} The number of times the word appears in the array.
 */
const howManyTimes = (array, word) => {
  let counter = 0; // Initialize a counter variable to keep track of the number of occurrences.
  if (array.length === 0) {
    return false; // Return false if the array is empty.
  }
  array.forEach(w => {
    // Iterate over each word in the array.
    if (w === word) {
      counter++; // Increment the counter if the word matches the specified word.
    }
  });
  console.log(`La palabra ${word} aparece ${counter} veces`); // Display the result.
  return counter; // Return the number of times the word appears.
};

howManyTimes(technologies, 'JavaScript');

// Array of project objects
const projects = [
  { name: 'Diseño de página web corporativa', duration: 40, budget: 5000 },
  {
    name: 'Desarrollo de aplicación móvil',
    duration: 60,
    budget: 7000,
  },
  { name: 'Integración de la API del sistema CRM', duration: 45, budget: 10000 },
  {
    name: 'Desarrollo de plataforma de comercio electrónico',
    duration: 120,
    budget: 30000,
  },
  { name: 'Migración de datos de sistemas', duration: 65, budget: 18000 },
];

console.log('Proyectos:', projects);

/**
 * Finds the project with the maximum budget.
 * @param {Object[]} projects - The array of project objects.
 * @returns {Object} The project with the maximum budget.
 */
const maxBudgetProject = projects => {
  let maxBudget = 0;
  let projectWithMaxBudget = null;
  projects.forEach(project => {
    if (project.budget > maxBudget) {
      maxBudget = project.budget;
      projectWithMaxBudget = project;
    }
  });
  console.log('El proyecto con mayor presupuesto es:', projectWithMaxBudget);
  return projectWithMaxBudget;
};

maxBudgetProject(projects);

/**
 * Calculates the average budget of all projects.
 * @param {Object[]} projects - The array of project objects.
 * @returns {number} The average budget of the projects.
 */
const averageBudget = projects => {
  const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0);
  const average = totalBudget / projects.length;
  return Number(average.toFixed(2)); // Return the average budget with two decimal places.
};

console.log(`El presupuesto promedio de los proyectos es:`, averageBudget(projects));

/**
 * Filters projects by minimum duration.
 * @param {Object[]} projects - The array of project objects.
 * @param {number} minDuration - The minimum duration to filter projects by.
 * @returns {Object[]} The filtered array of projects with duration greater than or equal to minDuration.
 */
const filterProjectsByDuration = (projects, minDuration) => {
  const filteredProjects = projects.filter(project => project.duration >= minDuration);
  console.log(
    `Proyectos con una duración mínima de ${minDuration} días:`,
    filteredProjects
  );
  return filteredProjects;
};

filterProjectsByDuration(projects, 60);
