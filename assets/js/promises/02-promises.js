//* Promises
// Promises are a way to work with asynchronous processes in a simpler way.
// A promise is an object that represents a value that may be available now, in the future, or never.
// A promise can be in one of three states: pending, fulfilled, or rejected.

//* Importing the heroes data from an external file
import { getHeroesByOwner } from '../import-export/02-import-export.js';

// Function that returns a promise to get heroes by owner asynchronously
const getHeroesByOwnerAsync = owner => {
  return new Promise((resolve, reject) => {
    // Set a timeout to simulate an asynchronous operation
    setTimeout(() => {
      // Call the getHeroesByOwner function to retrieve heroes based on owner
      const heroes = getHeroesByOwner(owner);
      // Check if heroes were found
      if (heroes.length > 0) {
        resolve(heroes); // Resolve the promise with the array of heroes if found
      } else {
        reject(`No hay héroes con el propietario: ${owner}`); // Reject the promise with an error message if no heroes found
      }
    }, 1000);
  });
};

// Call getHeroesByOwnerAsync with owner 'Marvel'
getHeroesByOwnerAsync('Marvel')
  .then(heroes => console.log(heroes)) // Log heroes to the console if found
  .catch(err => console.warn(err)); // Log error message if no heroes found
