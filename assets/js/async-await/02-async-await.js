//* Fetch API
// Fetch API is a browser interface that allows HTTP requests.
// Fetch API is a promise-based API, so we can use .then() and .catch() to handle the response.
// We need to use .json() to convert the response into a JS object.

//* API used in this example
// Breaking Bad Quotes API
// https://breakingbadquotes.xyz/

// Define the URL of the Breaking Bad Quotes API
const url = 'https://api.breakingbadquotes.xyz/v1/quotes';

// Create DOM elements for quote and author
const cardElement = document.createElement('div');
cardElement.classList.add('card');

const quoteElement = document.createElement('q');
quoteElement.classList.add('quote');

const authorElement = document.createElement('p');
authorElement.classList.add('author');

// Append quote and author elements to the card element
cardElement.appendChild(quoteElement);
cardElement.appendChild(authorElement);

// Append the card element to the body of the document
document.body.appendChild(cardElement);

// Fetch data from the API using async/await
const fetchData = async () => {
  try {
    // Fetch data from the provided URL
    const response = await fetch(url);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('La respuesta de la red no ha sido satisfactoria');
    }

    // Parse the JSON response and extract data
    const [data] = await response.json();
    const { quote, author } = data;

    // Update the quote and author elements in the DOM
    quoteElement.textContent = quote;
    authorElement.textContent = `- ${author}`;
  } catch (error) {
    // Log an error if fetching data fails
    console.error('Se ha producido un error al obtener los datos:', error);
  }
};

// Call the fetchData function to display a Breaking Bad quote on the webpage
fetchData();
