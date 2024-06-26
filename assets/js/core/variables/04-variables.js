//* Scope of variables
// The scope of a variable is the part of the code where it can be accessed and modified
// The scope of a variable is determined by where it is declared and where it is used

//* Global scope
// This variable is available everywhere in the code
const message = 'Variable global';

console.log({ message }); // Print the value of the global variable

//* Local scope
// This variable is only available inside the function
function localScope() {
  // This variable is only available inside the function
  const message = 'Variable local';
  // Print the value of the local variable
  console.log({ message });
}

localScope();

//* Block scope
// This variable is only available inside the block
function blockScope() {
  // This variable is only available inside the block
  if (true) {
    const message = 'Variable de bloque';
    // Print the value of the block-scoped variable
    console.log({ message });
  }
}

blockScope();
