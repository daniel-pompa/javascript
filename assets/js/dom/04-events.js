//* DOM Events - Click
// The click event fires when the user clicks on an element.

// Change the content of the <h1> element when clicked
const h1Element = document.querySelector('h1');
h1Element.textContent = 'Haz clic en este texto';
h1Element.style.cursor = 'pointer';

h1Element.addEventListener('click', () => {
  h1Element.textContent = 'Manipular el DOM con JavaScript';
});

// Select all anchor elements inside the element with class 'nav'
const links = document.querySelectorAll('.nav a');

// Add a click event listener to each anchor element
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    console.log('Ha hecho clic en un enlace');
    console.log(link.textContent);
  });
});
