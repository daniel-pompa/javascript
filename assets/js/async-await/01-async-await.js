//* Fetch API
// Fetch API is a browser interface that allows HTTP requests.
// Fetch API is a promise-based API, so we can use .then() and .catch() to handle the response.
// We need to use .json() to convert the response into a JS object.

//* API used in this example
// https://jsonplaceholder.typicode.com/

// Define the URL of the API
const url = 'https://jsonplaceholder.typicode.com/users';

// Fetch data from the API and log user information
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

// Invoke the fetchData function to start fetching and processing data
fetchData();
