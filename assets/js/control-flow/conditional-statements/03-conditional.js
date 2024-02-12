/**
 * The if else if statement is used to specify a new condition if the first condition is false
 * Logical operators
 * > Greater than
 * < Less than
 * >= Greater than or equal to
 * <= Less than or equal to
 * || At least one condition must be met
 * && All conditions must be met
 * && has higher precedence than ||
 * Use parenthesis to control the order of evaluation
 */

let balance = 100;
const fee = 200;
const creditCard = true;

console.log('Saldo:', balance);
console.log('Cuota:', fee);
console.log('Tarjeta de crédito:', creditCard);

if (balance >= fee) {
  console.log('Puedes pagar la cuota');
} else if (creditCard) {
  console.log('Puedes pagar con la tarjeta de crédito');
} else {
  console.log('No puedes pagar la cuota');
}

console.log('Fin del programa');
