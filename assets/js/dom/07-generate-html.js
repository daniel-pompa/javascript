//* Generate HTML

const form = document.querySelector('#form');

// Add a submit event listener to the form
form.addEventListener('submit', e => {
  e.preventDefault();

  // Retrieve the values of the email and password inputs
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Check if there is any previous alert element
  const previousAlert = document.querySelector('.alert');

  if (previousAlert) {
    previousAlert.remove();
  }

  // Create a new alert element
  const alert = document.createElement('DIV');
  alert.classList.add('alert');
  alert.style.borderRadius = '5px';

  // Check if either email or password input is empty
  if ([email, password].includes('')) {
    // If any field is empty, set the alert text content to indicate the error
    alert.textContent = 'Todos los campos son obligatorios';
    // Add the 'error' class to style the alert as an error message
    alert.classList.add('error');
  } else {
    // If both fields have values, set the alert text content to indicate success
    alert.textContent = 'Formulario enviado correctamente';
    // Add the 'success' class to style the alert as a success message
    alert.classList.add('success');
  }

  // Append the alert element to the form
  form.appendChild(alert);

  // Remove the alert element after 3 seconds
  setTimeout(() => {
    alert.remove();
  }, 3000);
});
