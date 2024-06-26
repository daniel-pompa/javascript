// The do...while loop runs the code block at least once and then continues to run as long as the condition is true.

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

do {
  console.log(heroes[i]); // Print the current hero
  i++; // Increment the counter
} while (i < heroes.length); // Continue the loop as long as i is less than the length of the heroes array
