//* Arrays
// Arrays can contain any data type
// Arrays are special objects used to store a collection of data
// They can contain a mixture of different data types and are used to store multiple values in a single variable

//* Array handling
// Define an array of technologies
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
];

// Print a heading for the array handling section
console.log(
  '%cArray handling',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

// Add elements to the beginning and end of the array using the spread operator
const newArray1 = ['TypeScript', ...technologies];
const newArray2 = [...technologies, 'TypeScript'];

// Print the new arrays
console.log(newArray1);
console.log(newArray2);

// Delete elements from the array using the filter method
const newArray3 = technologies.filter(technology => technology !== 'HTML5');
console.log(newArray3);

// Replace array elements using the map method
const newArray4 = technologies.map(element =>
  element === 'HTML5' ? 'TypeScript' : element
);
console.log(newArray4);

//* Array destructuring
// Assign specific array elements to individual variables using destructuring
const [, , , mongodb, express, react, node] = technologies;

// Print a heading for the array destructuring section
console.log(
  '%cArray destructuring',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

// Print the original array and the variables assigned using destructuring
console.log({ technologies });
console.log({ mongodb, express, react, node });
