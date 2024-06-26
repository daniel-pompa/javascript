// The for...in loop iterates a specified variable over all the enumerable properties of an object.

// Object representing the hero Aquiles
const aquiles = {
  name: 'Aquiles',
  father: 'Peleo',
  mother: 'Tetis',
};

// Iterate over the properties of the aquiles object using a for...in loop
for (let key in aquiles) {
  // Check if the property is directly defined on the object (not inherited)
  if (aquiles.hasOwnProperty.call(aquiles, key)) {
    console.log(`${key}: ${aquiles[key]}`); // Print the property name and value to the console
  }
}
