//* Scope of variables

// Global scope
// This variable is available everywhere in the code
const message = 'This is a global variable';

console.log({ message }); // Print the value of the global variable

// Local scope
function localScope() {
  // This variable is only available inside the function
  const message = 'This is a local variable';
  console.log({ message }); // Print the value of the local variable
}

localScope();

// Block scope
function blockScope() {
  // This variable is only available inside the block
  if (true) {
    const message = 'This is a block variable';
    console.log({ message }); // Print the value of the block-scoped variable
  }
}

blockScope();
