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

// Check if balance is sufficient for withdrawal
const balance = 2000;
const withdrawal = 500;

console.log('Saldo disponible:', balance);
console.log('Cantidad a retirar:', withdrawal);

// Check if balance is sufficient for withdrawal
if (balance >= withdrawal) {
  console.log('Operación realizada con éxito');
  console.log('Saldo disponible:', balance - withdrawal);
}

console.log('Fin del programa');
