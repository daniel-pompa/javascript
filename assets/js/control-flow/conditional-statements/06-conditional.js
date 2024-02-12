/**
 * The switch statement is used to perform different actions based on different conditions
 * The switch statement evaluates an expression and matches the expression's value to a case clause
 * If a match is found, the code block following the case clause is executed
 * If no match is found, the default code block is executed
 */

// Get the current day of the week
const day = new Date().getDay();

console.log({ day });

switch (day) {
  case 0: // If day is 0 (Sunday)
    console.log('Domingo');
    break;

  case 1: // If day is 1 (Monday)
    console.log('Lunes');
    break;

  case 2: // If day is 2 (Tuesday)
    console.log('Martes');
    break;

  case 3: // If day is 3 (Wednesday)
    console.log('Miércoles');
    break;

  case 4: // If day is 4 (Thursday)
    console.log('Jueves');
    break;

  case 5: // If day is 5 (Friday)
    console.log('Viernes');
    break;

  case 6: // If day is 6 (Saturday)
    console.log('Sábado');
    break;

  default: // If day is not between 0 and 6
    console.log('No es un día de la semana');
    break;
}
