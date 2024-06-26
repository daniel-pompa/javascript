//* Objects
// The objects are collections of properties and methods
// Properties are variables attached to the object
// Methods are functions attached to the object
// Objects are key-value pairs
// The key is the name of the property
// The value is the value of the property

//* Joining two or more objects
// We can join two or more objects using the spread operator

// Original objects
const pcWorkstation = {
  name: 'PC Workstation',
  price: 2500,
  available: true,
  specs: {
    cpu: 'Intel i9',
    ram: '32GB',
    storage: '1TB SSD',
  },
  calculateDiscount(discount) {
    return this.price - this.price * (discount / 100);
  },
};

const mouse = {
  name: 'Mouse',
  price: 50,
  available: true,
  specs: {
    type: 'Inalámbrico',
    dpi: '16000',
    color: 'Negro',
  },
  calculateDiscount(discount) {
    return this.price - this.price * (discount / 100);
  },
};

const keyboard = {
  name: 'Keyboard',
  price: 100,
  available: true,
  specs: {
    type: 'Mecánico',
    switches: 'Cherry MX Blue',
    backlight: 'RGB',
  },
  calculateDiscount(discount) {
    return this.price - this.price * (discount / 100);
  },
};

console.log({ pcWorkstation, mouse, keyboard });

const customer = {
  name: 'Daniel',
  surnames: 'Pompa Pareja',
  email: 'daniel.pompa@gmail.com',
  premium: false,
  address: {
    street: 'Calle falsa 20',
    city: 'Madrid',
    zip: '28001',
  },
  fullName() {
    return `${this.name} ${this.surnames}`;
  },
};

console.log({ customer });

const order = {
  orderId: 'A001',
  date: new Date().toLocaleDateString(),
  items: ['PC Workstation', 'Mouse', 'Keyboard'],
  totalAmount: pcWorkstation.price + mouse.price + keyboard.price,
  shippingCost: 20,
  status: 'Processing',
  calculateTotalWithDiscounts() {
    const pcPrice = pcWorkstation.calculateDiscount(10);
    const mousePrice = mouse.calculateDiscount(10);
    const keyboardPrice = keyboard.calculateDiscount(5);
    return pcPrice + mousePrice + keyboardPrice + this.shippingCost;
  },
};

console.log({ order });

// Combining objects using the spread operator
const newObject = {
  products: {
    pcWorkstation: { ...pcWorkstation },
    mouse: { ...mouse },
    keyboard: { ...keyboard },
  },
  customer: { ...customer },
  order: { ...order },
};

// Modifying the combined object
newObject.customer.premium = true; // Customer upgraded to premium
newObject.order.status = 'Enviado'; // Order status updated

console.log('Objeto combinado:', newObject);

// Accessing properties and methods of the combined object
console.log(`Nombre completo del cliente: ${newObject.customer.fullName()}`);
console.log(`Correo electrónico del cliente: ${newObject.customer.email}`);
console.log(
  `Dirección del cliente: ${newObject.customer.address.street}, ${newObject.customer.address.city}`
);
console.log('Items del pedido:', newObject.order.items);
console.log('Total del pedido:', newObject.order.totalAmount);
console.log('Gastos de envío:', newObject.order.shippingCost);
console.log('Fecha del pedido:', newObject.order.date);
console.log(
  'Precio del PC Workstation con un 10% de descuento:',
  newObject.products.pcWorkstation.calculateDiscount(10)
);
console.log(
  'Precio del Mouse con un 10% de descuento:',
  newObject.products.mouse.calculateDiscount(10)
);
console.log(
  'Precio del Keyboard con un 5% de descuento:',
  newObject.products.keyboard.calculateDiscount(5)
);
console.log(
  'Total del pedido con descuentos y gastos de envío:',
  newObject.order.calculateTotalWithDiscounts()
);
