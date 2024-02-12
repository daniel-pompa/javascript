// Define the shop object with its name and opening hours
const shop = {
  name: 'Tienda',
  openingHours: {
    weekdays: {
      open: 9,
      close: 20,
    },
    weekends: {
      open: 10,
      close: 14,
    },
  },
};

// Declare variables for opening hour and message
let openingHour;
let message;

// Array to store the days of the week
const daysOfTheWeek = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];

// Define options for formatting dates
const options = {
  weekday: 'long', // Display the full name of the weekday (e.g., Monday)
  year: 'numeric', // Display the year in numeric format (e.g., 2022)
  month: 'long', // Display the full name of the month (e.g., January)
  day: 'numeric', // Display the day of the month (e.g., 1)
};

// Create a new Date object representing the current date and time
const date = new Date();

// Get the current day of the week
const day = new Date().getDay();

// Get the current hour of the day
const currentHours = new Date().getHours();

// Function to get the current time and log it in HH:MM:SS format
const getCurrentTime = () => {
  // Get the current hour and format it to have two digits
  const hours = date.getHours().toString().padStart(2, '0');

  // Get the current minute and format it to have two digits
  const minutes = date.getMinutes().toString().padStart(2, '0');

  // Get the current second and format it to have two digits
  const seconds = date.getSeconds().toString().padStart(2, '0');

  // Log the formatted time to the console
  console.log(`${hours}:${minutes}:${seconds}`);
};

// Determine the opening hours based on the current day of the week
// If the day is Sunday (0) or Saturday (6), use the opening hours for weekends
// Otherwise, use the opening hours for weekdays
openingHour = [0, 6].includes(day)
  ? shop.openingHours.weekends
  : shop.openingHours.weekdays;

console.log(shop);

message =
  // Check if it's Sunday (day === 0)
  day === 0
    ? // If it's Sunday, set the message to indicate that the shop is closed on Sundays
      'Los sentimos, no abrimos en Domingo'
    : // Check if it's not Sunday and the current time is within the opening hours
    day !== 0 && currentHours >= openingHour.open && currentHours < openingHour.close
    ? // If true, set the message to indicate that the shop is open
      '¡Estamos abiertos!'
    : // If none of the above conditions are met, set the message to indicate that the shop is closed
      '¡Estamos cerrados!';

// Get the current date as a localized string in Spanish using the (es-ES) locale and the provided options
const currentDate = date.toLocaleDateString('es-ES', options);

// Capitalize the first letter of the current date and log it to the console
console.log(currentDate.charAt(0).toUpperCase() + currentDate.slice(1));

// Display the current time
getCurrentTime();

// Log the value of the 'message' variable to the console
console.log(message);
