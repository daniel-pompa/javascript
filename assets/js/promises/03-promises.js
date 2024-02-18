//* The Promise.all method
// Receives an array of promises and returns a new promise that is resolved when all promises in the array are resolved.
// If any of the promises in the array is rejected, the Promise.all method returntes a rejecd promise.

//* Importing the heroes data from an external file
import { getHeroById, getHeroesByOwner } from '../import-export/02-import-export.js';

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
    }, 1000);
  });
};

// Define a Promise that resolves when both getHeroByIdAsync and getHeroesByOwnerAsync promises are resolved
Promise.all([getHeroByIdAsync(1), getHeroesByOwnerAsync('DC')])
  // Handle the resolved promises
  .then(([hero, heroes]) => {
    // Log the name of the hero found
    console.log(`El héroe encontrado es: ${hero.name}`);
    // Log the names of all heroes found
    console.log(`Los héroes encontrados son: ${heroes.map(hero => hero.name)}`);
  })
  // Handle any errors that occur during the Promise.all operation
  .catch(error => console.log(error));

// Output:
// El héroe encontrado es: Wolverine
// Los héroes encontrados son: Batman,Superman,Flash,Cyborg,Wonder Woman
