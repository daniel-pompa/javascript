//* DOM Events - Input
// The input event fires when the value of an input element changes.

// Function to toggle the password input type between 'text' and 'password' with a delay
const togglePasswordVisibility = () => {
  const password = document.querySelector('.password');
  password.type = 'text';

  setTimeout(() => {
    password.type = 'password';
  }, 200);
};

// Select the email input element from the DOM
const emailInput = document.querySelector('.email');

// Add an input event listener to the email input element
emailInput.addEventListener('input', event => {
  console.log(event.target.value);
});

// Select the password input element from the DOM
const passwordInput = document.querySelector('.password');

// Add an input event listener to the password input element
passwordInput.addEventListener('input', togglePasswordVisibility);
