//* Manipulating DOM Elements with JavaScript

// Change title text
const title = document.querySelector('.title');
title.textContent = 'Document Object Model';

// Change CSS
title.style.backgroundColor = '#f1f5f9';
title.style.borderRadius = '2px';
title.style.maxWidth = '500px';
title.style.margin = '100px auto 0 auto';
title.style.boxShadow =
  '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
title.style.padding = '20px 0';

// Set the value of the e-mail field
const email = document.querySelector('#email');
email.value = 'daniel.pompa@gmail.com';

// Select all elements with the tag name 'a' and store them in the variable 'links'
const elements = document.querySelectorAll('a');

// Iterate over each element in 'elements' using the forEach method
elements.forEach(element => {
  // Set the 'target' attribute of each element to '_blank'
  element.setAttribute('target', '_blank');
  // Set the 'rel' attribute of each element to 'noopener noreferrer'
  element.setAttribute('rel', 'noopener noreferrer');
});

// Select all elements with the class name 'link' and store them in the 'links' variable
const links = document.querySelectorAll('.link');

// Update the href attribute of the first link element to 'https://www.mongodb.com/docs/'
links[0].setAttribute('href', 'https://www.mongodb.com/docs/');

// Update the href attribute of the second link element to 'https://expressjs.com/'
links[1].setAttribute('href', 'https://expressjs.com/');

// Update the href attribute of the third link element to 'https://es.react.dev/'
links[2].setAttribute('href', 'https://es.react.dev/');

// Update the href attribute of the fourth link element to 'https://nodejs.org/en'
links[3].setAttribute('href', 'https://nodejs.org/en');
