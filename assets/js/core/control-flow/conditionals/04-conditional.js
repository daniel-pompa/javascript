// Ternary operator
// condition ? expression1 : expression2
// If condition is true, expression1 is executed
// If condition is false, expression2 is executed

console.log(
  '%cOperador ternario',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

const authenticated = true;

authenticated ? console.log('Usuario autenticado') : console.log('No autenticado');

console.log(
  '%cDoble operador ternario',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

const availableBalance = 2000;
const purchase = 500;
const creditCardActive = true;
const isActiveMember = true;

console.log('Saldo:', availableBalance);
console.log('Compra:', purchase);
console.log('Tarjeta de crédito:', creditCardActive);
console.log('Miembro activo:', isActiveMember);

availableBalance >= purchase
  ? console.log('Puedes pagar con tu saldo')
  : creditCardActive
  ? console.log('Puedes pagar con tarjeta de crédito')
  : console.log('No tienes saldo suficiente');

console.log(
  '%cFunciones y ternarios anidados',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);
const canAccessPremiumService = (balance, cost, creditCard, member) => {
  return member
    ? balance >= cost || creditCard
      ? 'Puedes acceder al servicio premium'
      : 'No puedes acceder al servicio premium por falta de fondos'
    : 'No puedes acceder al servicio premium porque no eres miembro activo';
};

const membershipCost = 500;

console.log('coste de afiliación:', membershipCost);

// Result of the complex ternary operation
const accessMessage = canAccessPremiumService(
  availableBalance,
  membershipCost,
  creditCardActive,
  isActiveMember
);

console.log(accessMessage);

console.log(
  '%cEjemplo adicional con varios operadores ternarios',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

const userRole = 'admin'; // Possible values: 'admin', 'user', 'guest'

const roleMessage =
  userRole === 'admin'
    ? 'Tienes acceso completo al sistema'
    : userRole === 'user'
    ? 'Tienes acceso limitado al sistema'
    : 'Tienes acceso como invitado';

console.log('Rol del usuario:', userRole);
console.log(roleMessage);
