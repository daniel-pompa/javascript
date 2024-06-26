// The while loop is used to execute a block of code as long as the specified condition is true

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

let i = 0; // Initialize the counter

while (i < heroes.length) {
  // Iterate until the counter reaches the length of the array
  console.log(heroes[i]); // Print the current hero
  i++; // Increment the counter
}
