//* Fetch API
// Fetch API is a browser interface that allows HTTP requests.
// Fetch API is a promise-based API, so we can use .then() and .catch() to handle the response.
// We need to use .json() to convert the response into a JS object.

//* API used in this example
// Breaking Bad Quotes API
// https://breakingbadquotes.xyz/

// Define the URL of the API
const url = 'https://api.breakingbadquotes.xyz/v1/quotes';

/**
 * Creates a quote card element with the given quote and author.
 * @param {string} quote - The quote to display.
 * @param {string} author - The author of the quote.
 * @returns {HTMLElement} The quote card element.
 */
const createQuoteCard = (quote, author) => {
  const divElement = document.createElement('div');
  divElement.classList.add('card');
  divElement.style.cssText = `
    font-size: calc(1rem + 0.5vw);
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  `;

  const title = document.createElement('h3');
  title.classList.add('title');
  title.textContent = 'Breaking Bad Quote';
  title.style.cssText = `
    font-size: calc(1.4rem + 0.5vw);
    text-transform: uppercase;
  `;
  divElement.appendChild(title);

  const quoteElement = document.createElement('q');
  quoteElement.classList.add('quote');
  quoteElement.textContent = quote;

  const authorElement = document.createElement('p');
  authorElement.classList.add('author');
  authorElement.style.textAlign = 'right';
  authorElement.style.fontStyle = 'italic';
  authorElement.style.fontWeight = 'bold';
  authorElement.textContent = `- ${author}`;

  divElement.appendChild(quoteElement);
  divElement.appendChild(authorElement);

  return divElement;
};

/**
 * Fetches a quote from the Breaking Bad Quotes API and displays it on the page.
 * If the response is not ok, throws an error.
 */
const fetchAndDisplayQuote = () => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('La respuesta de la red no es correcta');
      }
      return response.json();
    })
    .then(data => {
      const { quote, author } = data[0];
      const quoteContainer = document.querySelector('.quote-container');
      quoteContainer.style.cssText = `
        max-width: 600px;
        margin: 0 auto;
      `;
      const quoteCard = createQuoteCard(quote, author);
      quoteContainer.appendChild(quoteCard);
    })
    .catch(error => console.error('Error al obtener datos:', error));
};

fetchAndDisplayQuote();
