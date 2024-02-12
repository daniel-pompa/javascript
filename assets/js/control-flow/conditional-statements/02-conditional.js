/**
 * The if else statement is used to execute a block of code if a condition is true
 * If the condition evaluates to false, another block of code can be executed
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

// If else statement
console.log('%cIf else statement', 'color:#64748b; font-weight: bold');
if (balance > fee) {
  console.log('Puedes pagar con tu saldo');
} else {
  console.log('No tienes saldo suficiente');
}

// If statement with || operator
console.log('%cIf statement with || operator', 'color:#64748b; font-weight: bold');
if (balance >= fee || creditCard) {
  // Nested if else statements
  // If statement inside another if statement
  if (balance >= fee) {
    console.log('Puedes pagar con tu saldo');
  } else {
    console.log('Puedes pagar con tu tarjeta');
  }
} else {
  console.log('No tienes saldo suficiente');
}

// If statement with && operator
console.log('%cIf statement with && operator', 'color:#64748b; font-weight: bold');
if (balance >= fee && creditCard) {
  console.log('Puedes pagar con tu saldo o crédito');
} else {
  console.log('No tienes saldo suficiente');
}

// Use parenthesis to control the order of evaluation
console.log(
  '%cUse parenthesis to control the order of evaluation',
  'color:#64748b; font-weight: bold'
);
if (balance >= fee && (creditCard || balance >= fee)) {
  console.log('Puedes pagar con tu saldo o crédito');
} else {
  console.log('No tienes saldo suficiente');
}

console.log('Fin del programa');
