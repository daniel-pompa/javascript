// Ternary operator
// condition ? expression1 : expression2
// If condition is true, expression1 is executed
// If condition is false, expression2 is executed

const authenticated = true;

authenticated ? console.log('Usuario autenticado') : console.log('No autenticado');

// Double ternary conditional operator
const balance = 200;
const purchase = 500;
const creditCard = true;

console.log('Saldo:', balance);
console.log('Compra:', purchase);
console.log('Tarjeta de crédito:', creditCard);

// Check if the balance is greater than the purchase amount
balance > purchase
  ? // If the condition is true, print the following message
    console.log('Puedes pagar con tu saldo')
  : // If the condition is false, check if creditCard is true
  creditCard
  ? // If creditCard is true, print the following message
    console.log('Puedes pagar con tarjeta de crédito')
  : // If both conditions are false, print the following message
    console.log('No tienes saldo suficiente');
