/**
 * The if statement is used to execute a block of code if a condition is true
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

const availableBalance = 2000;
const withdrawalAmount = 500;

console.log('Saldo disponible:', availableBalance);
console.log('Cantidad a retirar:', withdrawalAmount);

// Check if balance is sufficient for withdrawal amount
if (availableBalance >= withdrawalAmount) {
  console.log('Operación realizada con éxito');
  console.log('Saldo disponible:', availableBalance - withdrawalAmount);
}
