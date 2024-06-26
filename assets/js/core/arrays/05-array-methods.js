//* Useful array methods that do not modify the original array
// https://doesitmutate.xyz/

// Define an array of technologies
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'MongoDB',
  'Express',
  'React',
  'Node.js',
];

// Define an array of numbers
const numbers = [10, 20, 30, 40];

// Print the technologies and numbers arrays
console.log('Tecnologías:', technologies);
console.log('Numbers:', numbers);

// Print a heading for array iteration section
console.log(
  '%cArray Iteration',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

// Iterate over each element of technologies array and log its index and value
technologies.forEach((element, index) => console.log(`[${index}] ${element}`));

// Print a heading for array filtering section
console.log(
  '%cArray Filtering',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

// Create a new array with technologies that are not 'HTML5' and 'CSS3'
const filteredTechnologies = technologies.filter(
  element => element !== 'HTML5' && element !== 'CSS3'
);
console.log('Tecnologías filtradas:', filteredTechnologies);

// Create a new array with numbers that are greater than 15
const filteredNumbers = numbers.filter(number => number > 15);
console.log('Números filtrados:', filteredNumbers);

// Print a heading for array mapping section
console.log(
  '%cArray Mapping',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

// Create a new array by adding 5 to each element of numbers
const addedNumbers = numbers.map(number => number + 5);
console.log('Suma:', addedNumbers);

// Create a new array by subtracting 5 from each element of numbers
const subtractedNumbers = numbers.map(number => number - 5);
console.log('Resta:', subtractedNumbers);

// Create a new array by multiplying each element of numbers by 20
const multipliedNumbers = numbers.map(number => number * 20);
console.log('Multiplicación:', multipliedNumbers);

// Create a new array by dividing each element of numbers by 2
const dividedNumbers = numbers.map(number => number / 2);
console.log('División:', dividedNumbers);

// Print a heading for array reducing section
console.log(
  '%cArray Reducing',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

// Get the sum of numbers array
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Suma:', sum);

// Get the product of numbers array
const product = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log('Producto:', product);

// Get the total length of all characters in technologies array
const totalCharacters = technologies.reduce(
  (accumulator, current) => accumulator + current.length,
  0
);
console.log('Total de caracteres:', totalCharacters);

// Print a heading for array every and some section
console.log(
  '%cArray Every and Some',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

// Check if every element of numbers array is greater than 10
const greaterThanTen = numbers.every(number => number > 10);
console.log('Todos son mayor que diez:', greaterThanTen);

// Check if every element of numbers array is less than 50
const lessThanFifty = numbers.every(number => number < 50);
console.log('Todos son menor que cincuenta:', lessThanFifty);

// Check if there is at least one number greater than 15 of numbers array
const greaterThanFifteen = numbers.some(number => number > 15);
console.log('Al menos uno es mayor que quince:', greaterThanFifteen);

// Check if some of the elements of numbers array are even numbers
const evenNumbers = numbers.some(number => number % 2 === 0);
console.log('Números pares:', evenNumbers);

// Check if some of the elements of numbers array are odd numbers
const oddNumbers = numbers.some(number => number % 2 === 1);
console.log('Números impares:', oddNumbers);

//* Advanced: Combining Array Methods
// Print a heading for advanced combination section
console.log(
  '%cAdvanced Array Method Combinations',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

// Filter numbers greater than 10, then map to their square values
const filteredAndSquared = numbers
  .filter(number => number > 10)
  .map(number => number ** 2);

console.log('Números filtrados y elevados al cuadrado:', filteredAndSquared);

// Reduce to find the maximum number
const maxNumber = numbers.reduce(
  (max, current) => (current > max ? current : max),
  numbers[0]
);

console.log('Número máximo:', maxNumber);

// Chain map and reduce to get the sum of squared numbers
const sumOfSquares = numbers
  .map(number => number ** 2)
  .reduce((sum, current) => sum + current, 0);

console.log('Suma de números al cuadrado:', sumOfSquares);
