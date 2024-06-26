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

let availableBalance = 100;
const membershipCost = 200;
const creditCardActive = true;

console.log('Saldo:', availableBalance);
console.log('Cuota:', membershipCost);
console.log('Tarjeta de crédito:', creditCardActive);

if (availableBalance >= membershipCost) {
  console.log('Puedes pagar la cuota');
} else if (creditCardActive) {
  console.log('Puedes pagar con la tarjeta de crédito');
} else {
  console.log('No puedes pagar la cuota');
}
