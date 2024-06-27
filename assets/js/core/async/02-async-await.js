//* Async/Await
// With async/await, you can write asynchronous code that looks and behaves like synchronous code.

//* API used in this example
// Breaking Bad Quotes API
// https://breakingbadquotes.xyz/

// Define the URL of the Breaking Bad Quotes API
const url = 'https://api.breakingbadquotes.xyz/v1/quotes';

/**
 * Creates a quote card element with the given quote and author.
 * @param {string} quote - The quote to display.
 * @param {string} author - The author of the quote.
 * @return {HTMLElement} The newly created quote card element.
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
 * Fetches data from the Breaking Bad Quotes API using async/await and displays a quote card on the webpage.
 * @returns {Promise<void>} A promise that resolves when the quote card has been displayed.
 */
const fetchData = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('La respuesta de la red no ha sido satisfactoria');
    }

    const [data] = await response.json();
    const { quote, author } = data;

    const quoteContainer = document.querySelector('.quote-container');
    quoteContainer.style.cssText = `
        max-width: 600px;
        margin: 0 auto;
      `;

    const quoteCard = createQuoteCard(quote, author);

    quoteContainer.appendChild(quoteCard);
  } catch (error) {
    console.error('Se ha producido un error al obtener los datos:', error);
  }
};

fetchData();
