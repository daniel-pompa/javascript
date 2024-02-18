//* Import and Export
// The import statement is used to import bindings which are exported by another module.
// The export statement is used to export functions, objects, or primitive values from a given file (or module).

//* Importing the heroes data from an external file
import heroes from '../../data/heroes.js';

//* Exporting the functions
// Function to find a hero by id
export const getHeroById = id => heroes.find(heroe => heroe.id === id);

// Function to find a hero by name
export const getHeroByName = name => heroes.find(heroe => heroe.name === name);

// Function to filter heroes by owner
export const getHeroesByOwner = owner => heroes.filter(heroe => heroe.owner === owner);

