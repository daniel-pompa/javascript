//* DOM Selectors
// The selectors are used to select the HTML elements in JavaScript.
// They are used to manipulate the HTML elements using JavaScript.
// There are various types of selectors in JavaScript.
// These are as follows:
// 1. Single Element Selector
// 2. Multiple Element Selector

//* Multiple Element Selectors

let result;

//* Get elements by class name
// Syntax: document.getElementsByClassName(names);
// It returns an HTMLCollection object that represents a collection of elements
// This method returns a collection of elements with a specified class name(s)
// The names parameter is a string that specifies the class name(s) to be retrieved
// This method is useful when you want to select multiple elements with the same class name

console.log('%cGet elements by class name', 'color:#64748b; font-weight: bold');

// Get all elements with class name 'link' and store them in the 'elements' array
const elements = [...document.getElementsByClassName('link')];

// Extract the text content from each element in the 'elements' array
// Store them in a new array using the map method
// Then join the elements of the new array with a hyphen ('-') as the separator
// The result is assigned to the 'result' variable
// Note: The textContent property is used to get the text content of an element
// Note: The spread operator (...) is used to convert the HTMLCollection into an array
// Note: The map method creates a new array with the results of calling a function for every array element
// Note: The join method joins all elements of an array into a string
// Note: The join method takes an optional parameter that specifies the separator between each array element
result = elements.map(element => element.textContent).join(' - ');

console.log({ elements });
console.log(result);

//* Get elements by tag name
// Syntax: document.getElementsByTagName(name);
// It returns an HTMLCollection object that represents a collection of elements
// This method returns a collection of elements with the specified tag name(s)
// The name parameter is a string that specifies the tag name(s) to be retrieved
// This method is useful when you want to select multiple elements with the same tag name
// Note: The tag name is case-sensitive

console.log('%cGet elements by tag name', 'color:#64748b; font-weight: bold');

// Get all elements with tag name 'a' and store them in the 'links' array
const links = [...document.getElementsByTagName('a')];

// Extract the text content from each element in the 'links' array
// Store them in a new array using the map method
// Then join the elements of the new array with a hyphen ('-') as the separator
// The result is assigned to the 'result' variable
// Note: The textContent property is used to get the text content of an element
// Note: The spread operator (...) is used to convert the HTMLCollection into an array
// Note: The map method creates a new array with the results of calling a function for every array element
// Note: The join method joins all elements of an array into a string
// Note: The join method takes an optional parameter that specifies the separator between each array element
result = links.map(link => link.textContent).join(' - ');

console.log({ links });
console.log(result);

//* Query selector all
// Syntax: document.querySelectorAll(selectors);
// It returns a NodeList object that represents a collection of elements
// This method returns all elements in the document that matches the specified selectors
// The selectors parameter is a string that specifies the selectors to be retrieved
// This method is useful when you want to select multiple elements with different selectors
// Note: The querySelectorAll method returns a static NodeList object
// Note: The querySelectorAll method does not update the NodeList object when the document changes
// Note: The querySelectorAll method does not return a live collection of elements
// Note: The querySelectorAll method returns all elements that matches the specified selectors, regardless of its position in the document

console.log('%cQuery selector all', 'color:#64748b; font-weight: bold');

// Get all elements with class name 'link' and store them in the 'navLinks' array
const navLinks = [...document.querySelectorAll('.link')];

// Extract the text content from each element in the 'navLinks' array
// Store them in a new array using the map method
// Then join the elements of the new array with a hyphen ('-') as the separator
// The result is assigned to the 'result' variable
// Note: The textContent property is used to get the text content of an element
// Note: The spread operator (...) is used to convert the NodeList into an array
// Note: The map method creates a new array with the results of calling a function for every array element
// Note: The join method joins all elements of an array into a string
// Note: The join method takes an optional parameter that specifies the separator between each array element
result = navLinks.map(element => element.textContent).join(' - ');

console.log({ navLinks });
console.log(result);
