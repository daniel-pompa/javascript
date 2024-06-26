/**
 * The switch statement is used to perform different actions based on different conditions
 * The switch statement evaluates an expression and matches the expression's value to a case clause
 * If a match is found, the code block following the case clause is executed
 * If no match is found, the default code block is executed
 */

// Enumeration of operation types
const OperationType = Object.freeze({
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
  POWER: 'power',
  SQUARE_ROOT: 'square_root',
  FACTORIAL: 'factorial',
});

// Helper functions to handle each operation
const handleAddition = (a, b) => {
  const result = a + b;
  console.log(`${a} + ${b} =`, result);
  return result;
};

const handleSubtraction = (a, b) => {
  const result = a - b;
  console.log(`${a} - ${b} =`, result);
  return result;
};

const handleMultiplication = (a, b) => {
  const result = a * b;
  console.log(`${a} * ${b} =`, result);
  return result;
};

const handleDivision = (a, b) => {
  if (b === 0) {
    console.error('Error: división por cero');
    return;
  }
  const result = a / b;
  console.log(`${a} / ${b} =`, result);
  return result;
};

const handlePower = (a, b) => {
  const result = Math.pow(a, b);
  console.log(`${a} ^ ${b} =`, result);
  return result;
};

const handleSquareRoot = a => {
  if (a < 0) {
    console.error('Error: no se puede calcular la raíz cuadrada de un número negativo');
    return;
  }
  const result = Math.sqrt(a);
  console.log(`√${a} =`, result);
  return result;
};

const handleFactorial = a => {
  if (a < 0) {
    console.error('Error: factorial de un número negativo es undefined');
    return;
  }
  if (a === 0 || a === 1) {
    console.log(`${a}! = 1`);
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  console.log(`${a}! =`, result);
  return result;
};

// Main function to perform the calculation
const calculate = (operation, a, b = null) => {
  switch (operation) {
    case OperationType.ADD:
      return handleAddition(a, b);
    case OperationType.SUBTRACT:
      return handleSubtraction(a, b);
    case OperationType.MULTIPLY:
      return handleMultiplication(a, b);
    case OperationType.DIVIDE:
      return handleDivision(a, b);
    case OperationType.POWER:
      return handlePower(a, b);
    case OperationType.SQUARE_ROOT:
      return handleSquareRoot(a);
    case OperationType.FACTORIAL:
      return handleFactorial(a);
    default:
      console.error('Tipo de operación desconocido:', operation);
  }
};

// Usage examples
calculate(OperationType.ADD, 10, 5); // Logs: 10 + 5 = 15
calculate(OperationType.SUBTRACT, 10, 5); // Logs: 10 - 5 = 5
calculate(OperationType.MULTIPLY, 10, 5); // Logs: 10 * 5 = 50
calculate(OperationType.DIVIDE, 10, 5); // Logs: 10 / 5 = 2
calculate(OperationType.POWER, 2, 3); // Logs: 2 ^ 3 = 8
calculate(OperationType.SQUARE_ROOT, 16); // Logs: √16 = 4
calculate(OperationType.FACTORIAL, 5); // Logs: factorial de 5 = 120
calculate(OperationType.DIVIDE, 10, 0); // Error: división por cero
calculate(OperationType.SQUARE_ROOT, -4); // Error: no se puede calcular la raíz cuadrada de un número negativo
calculate(OperationType.FACTORIAL, -4); // Error: el factorial de un número negativo es undefined
calculate('unknown', 10, 5); // Error: tipo de operación desconocido: unknown
