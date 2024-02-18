//* DOM Selectors
// The selectors are used to select the HTML elements in JavaScript.
// They are used to manipulate the HTML elements using JavaScript.
// There are various types of selectors in JavaScript.
// These are as follows:
// 1. Single Element Selector
// 2. Multiple Element Selector

//* Single Element Selectors

//* Get element by id
// This method is used to select the element with the specified id
// It returns the element with the specified id
// If no element is found, it returns null
// Syntax: document.getElementById(id);
// Here, id is the id of the element to be selected
// The id is a string and is case-sensitive
// The id must be unique within the HTML document
// If there are multiple elements with the same id, only the first element is returned
// If no element is found, null is returned

console.log('%cGet element by id', 'color:#64748b; font-weight: bold');

const heading = document.getElementById('heading');

console.log({ heading });

// Get things from the element
console.log('heading.textContent:', heading.textContent);
console.log('heading.tagName:', heading.tagName);
console.log('heading.id:', heading.id);
console.log('heading.className:', heading.className);
console.log('heading.getAttribute("id"):', heading.getAttribute('id'));
console.log('heading.getAttribute("class"):', heading.getAttribute('class'));

// Check if class exists
console.log('heading.classList.contains("title"):', heading.classList.contains('title'));

// Add class
heading.classList.add('test');
console.log('heading.classList:', heading.classList);

// Remove class
heading.classList.remove('test');
console.log('heading.classList:', heading.classList);

//* Query selector
// This method is used to select the first element that matches the specified CSS selector(s)
// It returns the first element that matches the specified CSS selector(s)
// If no element is found, it returns null
// Syntax: document.querySelector(selectors);
// Here, selectors are the CSS selectors to select the element
// The selectors are the same as we use in CSS
// If multiple elements match the selectors, only the first element is returned
// If no element is found, null is returned

console.log('%cQuery selector', 'color:#64748b; font-weight: bold');

const title = document.querySelector('h1.title');

console.log({ title });

// Get things from the element
console.log('title.textContent:', title.textContent);
console.log('title.tagName:', title.tagName);
console.log('title.id:', title.id);
console.log('title.className:', title.className);
console.log('title.getAttribute("id"):', title.getAttribute('id'));
console.log('title.getAttribute("class"):', title.getAttribute('class'));

// Check if class exists
console.log('title.classList.contains("title"):', title.classList.contains('title'));

// Add class
title.classList.add('test');
console.log('title.classList:', title.classList);

// Remove class
title.classList.remove('test');
console.log('title.classList:', title.classList);
