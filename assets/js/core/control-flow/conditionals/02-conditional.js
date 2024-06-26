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

let availableBalance = 100;
const membershipCost = 200;
const creditCardActive = true;
const isPremiumCustomer = true;

console.log('Saldo:', availableBalance);
console.log('Cuota:', membershipCost);
console.log('Tarjeta de crédito:', creditCardActive);
console.log('Cliente premium:', isPremiumCustomer);

console.log(
  '%cIf else statement',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

if (availableBalance > membershipCost) {
  console.log('Puedes pagar con tu saldo');
} else {
  console.log('No tienes saldo suficiente');
}

console.log(
  '%cIf statement with || operator',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

if (availableBalance >= membershipCost || creditCardActive) {
  // Nested if else statements
  // If statement inside another if statement
  if (availableBalance >= membershipCost) {
    console.log('Puedes pagar con tu saldo');
  } else {
    console.log('Puedes pagar con tu tarjeta');
  }
} else {
  console.log('No tienes saldo suficiente');
}

console.log(
  '%cIf statement with && operator',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

if (availableBalance >= membershipCost && creditCardActive) {
  console.log('Puedes pagar con tu saldo o tarjeta de crédito');
} else {
  console.log('No tienes saldo suficiente');
}

console.log(
  '%cUse parenthesis to control the order of evaluation',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

if (isPremiumCustomer && (availableBalance >= membershipCost || creditCardActive)) {
  console.log('Puedes acceder al servicio premium');
} else {
  console.log('No puedes acceder al servicio premium');
}
