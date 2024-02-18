//* Import and Export
// The import statement is used to import bindings which are exported by another module.
// The export statement is used to export functions, objects, or primitive values from a given file (or module).

//* Import the customers data from an external file
import customers from '../../data/customers.js';

// Function to find a customer by their ID
const getCustomerById = id => customers.find(customer => customer.id === id);

// Log the customer found by ID 'a1d40e6a-bd34-4281-99dc-141eadb19c01'
console.log(getCustomerById('a1d40e6a-bd34-4281-99dc-141eadb19c01'));

// Function to find a customer by their email
const getCustomerByEmail = email => customers.find(customer => customer.email === email);

// Log the customer found by email 'oscar.pompa@gmail.com'
console.log(getCustomerByEmail('oscar.pompa@gmail.com'));

// Function to filter out premium customers
const getCustomersPremium = () => customers.filter(customer => customer.premium);

// Log all premium customers
console.log(getCustomersPremium());
