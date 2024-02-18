//* Promises
// Promises are a way to work with asynchronous processes in a simpler way.
// A promise is an object that represents a value that may be available now, in the future, or never.
// A promise can be in one of three states: pending, fulfilled, or rejected.

//* Importing the heroes data from an external file
import { getHeroById } from '../import-export/02-import-export.js';

// Function that returns a promise to get a hero by id asynchronously
const getHeroByIdAsync = id => {
  return new Promise((resolve, reject) => {
    // Set a timeout to simulate an asynchronous operation
    setTimeout(() => {
      // Call the getHeroesById function to retrieve a hero based their id
      const heroe = getHeroById(id);
      // If hero is found, resolve the promise with the hero object
      if (heroe) {
        resolve(heroe);
      } else {
        // If hero is not found, reject the promise with an error message
        reject(`No existe ningún héroe con id ${id}`);
      }
    }, 1000);
  });
};

// Calling the getHeroeByIdAsync function with id 3
getHeroByIdAsync(3)
  .then(heroe => console.log('Héroe:', heroe)) // Logging the hero object when promise is resolved
  .catch(error => console.error(error)); // Logging any errors that occur during the promise execution
