//* Fetch API
// Fetch API is a browser interface that allows HTTP requests.
// Fetch API is a promise-based API, so we can use .then() and .catch() to handle the response.
// We need to use .json() to convert the response into a JS object.

//* API used in this example
// Breaking Bad Quotes API
// https://breakingbadquotes.xyz/

//* We can use the following code to fetch the data from the URL and log the response to the console
// const url = 'https://api.breakingbadquotes.xyz/v1/quotes';

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

//* We can also use the data to display it on the page
// Define the URL of the API
const url = 'https://api.breakingbadquotes.xyz/v1/quotes';

// Create a div element and add 'card' class
const divElement = document.createElement('div');
divElement.classList.add('card');

// Create a <q> element for the quote and add 'quote' class
const quoteElement = document.createElement('q');
quoteElement.classList.add('quote');

// Create a <p> element for the author and add 'author' class
const paragraphElement = document.createElement('p');
paragraphElement.classList.add('author');

// Add the quote and author elements to the div
divElement.appendChild(quoteElement);
divElement.appendChild(paragraphElement);

// Add the div to the body of the document
document.body.append(divElement);

// Make a fetch request to the URL
fetch(url)
  .then(response => {
    // Check if the response is not ok
    if (!response.ok) {
      throw new Error('La respuesta de la red no es correcta'); // Throw an error if response is not ok
    }
    return response.json(); // Return the response in JSON format
  })
  .then(data => {
    // Extracts the quote and the author from the received data
    const { quote, author } = data[0];
    // Sets the text of the quote and the author in the corresponding elements
    quoteElement.textContent = quote;
    paragraphElement.textContent = `- ${author}`;
  })
  .catch(error => console.error('Hubo un problema con la petición:', error));
