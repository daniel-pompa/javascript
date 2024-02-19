//* Fetch API
// Fetch API is a browser interface that allows HTTP requests.
// Fetch API is a promise-based API, so we can use .then() and .catch() to handle the response.
// We need to use .json() to convert the response into a JS object.

//* API used in this example
// https://jsonplaceholder.typicode.com/

// Define the URL of the API
const url = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch data from the API
const getData = () => {
  fetch(url) // Fetch data from the specified URL
    .then(response => response.json()) // Parse the response as JSON
    .then(result => {
      result.forEach(user => {
        console.log(user);
      });
    })
    .catch(error => console.error('Hubo un problema con la petición:', error)); // Catch and log any errors that occur during the fetch operation
};

// Call the consultAPI function to start fetching data from the API
getData();
