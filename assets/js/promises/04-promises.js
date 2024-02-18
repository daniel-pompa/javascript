//* The Promise.race method
// Receives an array of promises.
// Returns a new promise that is resolved or rejected when the first promise in the array is resolved or rejected.
// This method is useful when you want to get the result of the first promise that is resolved or rejected.

//* Importing the heroes data from an external file
import {
  getHeroById,
  getHeroByName,
  getHeroesByOwner,
} from '../import-export/02-import-export.js';

// Function that returns a promise to get a hero by id
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

// Function that returns a promise to get a hero by name
const getHeroByNameAsync = name => {
  return new Promise((resolve, reject) => {
    // Set a timeout to simulate an asynchronous operation
    setTimeout(() => {
      // Call the getHeroesById function to retrieve a hero based their name
      const heroe = getHeroByName(name);
      // If hero is found, resolve the promise with the hero object
      if (heroe) {
        resolve(heroe);
      } else {
        // If hero is not found, reject the promise with an error message
        reject(`No existe ningún héroe con el nombre ${name}`);
      }
    }, 500);
  });
};

// Function that returns a promise to get heroes by owner
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
    }, 2000);
  });
};

// Using Promise.race to execute multiple asynchronous functions simultaneously and resolve with the first one that completes
Promise.race([
  getHeroByIdAsync(1), // Call getHeroByIdAsync function with hero ID 1
  getHeroByNameAsync('Batman'), // Call getHeroByNameAsync function with hero name 'Batman'
  getHeroesByOwnerAsync('Marvel'), // Call getHeroesByOwnerAsync function with owner 'Marvel'
])
  .then(result => console.log(result)) // Log the result of the first completed asynchronous function
  .catch(error => console.log(error)); // Log any errors that may occur during the asynchronous operations

// Output: {id: 2, name: 'Batman', owner: 'DC'}
