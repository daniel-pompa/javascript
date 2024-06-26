//* Arrays
// Arrays can contain any data type
// Arrays are special objects used to store a collection of data
// They can contain a mixture of different data types and are used to store multiple values in a single variable

// Array of programming languages
const languages = ['JavaScript', 'TypeScript'];
console.log(languages);

// Array of front-end technologies
const frontEnd = ['HTML5', 'CSS3', 'React', 'Redux', 'Tailwind CSS'];
console.log({ frontEnd });

// Array of back-end technologies
const backEnd = ['MongoDB', 'Node.js', 'Express.js', 'Mongoose ODM'];
console.log({ backEnd });

// Concatenate arrays into a new array
const technologies = [...languages, ...frontEnd, ...backEnd];
console.log({ technologies });

// Get the length of the array
console.log(technologies.length);

// Get the first and last elements of the array
console.log(technologies[0]);
console.log(technologies[technologies.length - 1]);

// Get the index of an element in the array
console.log(technologies.indexOf('React'));

// Remove the first and last elements of the array
console.log(technologies.shift());
console.log(technologies.pop());

// Add elements to the beginning and end of the array
console.log(technologies.unshift('JavaScript'));
console.log(technologies.push('Mongoose ODM'));

// Get a slice of the array
// Get a slice of the 'technologies' array from index 0 to index 2 (exclusive)
console.log(technologies.slice(0, 2));

// Modify the original array
// Replace the element at index 0 in the 'languages' array with 'Java'
languages.splice(0, 1, 'Java');
console.log(languages);

// Insert the element 'JavaScript' at the beginning of the 'languages' array
languages.splice(0, 0, 'JavaScript');
console.log(languages);

// Filter elements in the array based on a condition
// Filter the 'technologies' array to include only the elements 'MongoDB', 'Express', 'React', and 'Node'
const mern = technologies.filter(
  e => e === 'MongoDB' || e === 'Express.js' || e === 'React' || e === 'Node.js'
);
console.log(mern);

// Reverse the array
console.log(mern.reverse());

// Sort the array in ascending and descending order
console.log(mern.sort((a, b) => (a > b ? 1 : -1)));
console.log(mern.sort((a, b) => (a > b ? -1 : 1)));

// Find the position of an element in the array
console.log(mern.lastIndexOf('Vue')); // -1
console.log(mern.lastIndexOf('React')); // 2

// Check if an element exists in the array
console.log(mern.includes('Vue')); // false
console.log(mern.includes('React')); // true

// Flatten nested arrays
const newArray = [frontEnd, ['Angular', 'Vue']];
console.log(newArray.flat());

// Check if a value is an array
console.log(Array.isArray(newArray)); // true
console.log(Array.isArray('Hola'));

// Convert an array to a string
console.log(mern.toString());
console.log(mern.join(' - '));
