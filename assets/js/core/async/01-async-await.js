//* Async/Await
// With async/await, you can write asynchronous code that looks and behaves like synchronous code.

//* API used in this example
// https://jsonplaceholder.typicode.com/

// Define the URL of the API
const url = 'https://jsonplaceholder.typicode.com/users';

/**
 * fetchData function: fetches data from the API using async/await and logs each user object
 * @returns {Promise<void>} - A promise that resolves when all user objects have been logged
 */
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(user => {
      console.log(user);
    });
  } catch (error) {
    console.error('Se ha producido un error al obtener los datos:', error);
  }
};

fetchData();
