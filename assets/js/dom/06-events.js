//* DOM Events - Submit Event
// The submit event fires when a form is submitted.

// Select the form element using its id
const form = document.querySelector('#form');

// Add an event listener to the form for the submit event
form.addEventListener('submit', event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the email and password inputs
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');

  // Check if either email or password input is empty
  if (emailInput.value === '' || passwordInput.value === '') {
    // Log an error message if any field is empty
    console.log('Todos los campos son obligatorios');
  } else {
    // Log the email and password inputs if both are filled
    console.log(emailInput.value);
    console.log(passwordInput.value);
    // Log a success message for form submission
    console.log('Formulario enviado');
  }
});
