//* Async/Await
// With async/await, you can write asynchronous code that looks and behaves like synchronous code.

//* API used in this example
// https://jsonplaceholder.typicode.com/

/**
 * Makes requests to two different JSONPlaceholder API URLs
 * @param {string} url1 - The URL of the first resource
 * @param {string} url2 - The URL of the second resource
 */
const fetchData = async (url1, url2) => {
  try {
    // Make requests to both URLs in parallel and wait for both to complete
    const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)]);

    // Check if any of the answers are unsuccessful
    if (!response1.ok || !response2.ok) {
      throw new Error('Al menos una respuesta de la red no es correcta');
    }

    // Parse responses as JSON
    const result1 = await response1.json();
    const result2 = await response2.json();

    // Display the results in the console
    console.log(result1);
    console.log(result2);
  } catch (error) {
    // Handles any errors that may occur during the process
    console.error('Hubo un problema al obtener los datos:', error);
  }
};

// URLs of the resources to be consulted
const url1 = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://jsonplaceholder.typicode.com/users/1/todos';

// Call the fetchData function with the provided URLs
fetchData(url1, url2);
