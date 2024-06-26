/**
 * The for...of loop is used to iterate over iterable objects, such as arrays, maps, sets, and arguments.
 * In each iteration, it executes a specified block of code, providing the value of each distinct property.
 */

// Array of heroes
const heroes = [
  'Aquiles',
  'Héctor',
  'Paris',
  'Agamenón',
  'Menelao',
  'Patroclo',
  'Ulises',
  'Néstor',
  'Diomedes',
  'Ajax',
];

// Iterate through the heroes array using a for...of loop
for (let hero of heroes) {
  console.log(hero); // Print the name of each hero to the console
}
