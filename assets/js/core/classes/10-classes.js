// Define the Person class
class Person {
  constructor(name = '', surnames = '', age = 0, email = null) {
    this._name = name;
    this._surnames = surnames;
    if (age < 0) {
      throw new Error('La edad no puede ser un valor negativo');
    }
    this._age = age;
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !EMAIL_REGEX.test(email)) {
      throw new Error('El e-mail no tiene un formato válido');
    }
    this._email = email;
  }

  //* Getters
  get name() {
    return this._name;
  }
  get surnames() {
    return this._surnames;
  }
  get age() {
    return this._age;
  }
  get email() {
    return this._email;
  }

  //* Setters
  set name(name) {
    this._name = name;
  }
  set surnames(surnames) {
    this._surnames = surnames;
  }
  set age(age) {
    if (age < 0) {
      throw new Error('La edad no puede ser un valor negativo');
    }
    this._age = age;
  }
  set email(email) {
    this._email = email;
  }

  //* Methods
  sayHello() {
    console.log(`Hola, mi nombre es ${this.name}`);
  }

  showData() {
    console.log(`Nombre: ${this.name}`);
    console.log(`Apellidos: ${this.surnames}`);
    console.log(`Edad: ${this.age}`);
    console.log(`Correo electrónico: ${this.email}`);
  }
}

//* Inheritance - Developer class
class Developer extends Person {
  constructor(
    name = '',
    surnames = '',
    age = 0,
    email = '',
    profession = '',
    languages = []
  ) {
    super(name, surnames, age, email);
    this._profession = profession;
    this._languages = languages;
  }

  //* Getters
  get profession() {
    return this._profession;
  }
  get languages() {
    return this._languages;
  }

  //* Setters
  set profession(profession) {
    this._profession = profession;
  }
  set languages(languages) {
    if (!Array.isArray(languages)) {
      throw new Error('Los lenguajes de programación deben ser un array');
    }
    this._languages = languages;
  }

  //* Methods
  sayHello() {
    console.log(`Hola, mi nombre es ${this.name} y soy ${this.profession}.`);
  }

  showData() {
    console.log(
      `%cDatos del ${this.profession}`,
      'color:#1e40af; text-transform:uppercase; font-weight: bold'
    );
    super.showData();
    console.log(`Profesión: ${this.profession}`);
    console.log('Lenguajes de programación:', this.languages.join(', '));
  }

  addLanguage(language) {
    if (typeof language !== 'string' || language.trim() === '') {
      throw new Error('El lenguaje de programación debe ser una cadena no vacía');
    }
    this._languages = [...this._languages, language];
  }
}

//* Inheritance - Specialized Developer classes
class BackEndDeveloper extends Developer {
  constructor(name, surnames, age, email, languages = [], backEnd = []) {
    super(name, surnames, age, email, 'Desarrollador Back-End', languages);
    this._backEnd = backEnd;
  }

  //* Getters
  get backEnd() {
    return this._backEnd;
  }

  //* Setters
  set backEnd(backEnd) {
    if (!Array.isArray(backEnd)) {
      throw new Error('Las tecnologías back-end deben ser un array');
    }
    this._backEnd = backEnd;
  }

  showData() {
    super.showData();
    console.log('Tecnologías back-end:', this.backEnd.join(', '));
  }
}

class FrontEndDeveloper extends Developer {
  constructor(name, surnames, age, email, languages = [], frontEnd = []) {
    super(name, surnames, age, email, 'Desarrollador Front-End', languages);
    this._frontEnd = frontEnd;
  }

  //* Getters
  get frontEnd() {
    return this._frontEnd;
  }

  //* Setters
  set frontEnd(frontEnd) {
    if (!Array.isArray(frontEnd)) {
      throw new Error('Las tecnologías front-end deben ser un array');
    }
    this._frontEnd = frontEnd;
  }

  showData() {
    super.showData();
    console.log('Tecnologías front-end:', this.frontEnd.join(', '));
  }
}

class FullStackDeveloper extends Developer {
  constructor(name, surnames, age, email, languages = [], frontEnd = [], backEnd = []) {
    super(name, surnames, age, email, 'Desarrollador Full Stack', languages);
    this._frontEnd = frontEnd;
    this._backEnd = backEnd;
  }

  //* Getters
  get frontEnd() {
    return this._frontEnd;
  }
  get backEnd() {
    return this._backEnd;
  }

  //* Setters
  set frontEnd(frontEnd) {
    if (!Array.isArray(frontEnd)) {
      throw new Error('Las tecnologías front-end deben ser un array');
    }
    this._frontEnd = frontEnd;
  }
  set backEnd(backEnd) {
    if (!Array.isArray(backEnd)) {
      throw new Error('Las tecnologías back-end deben ser un array');
    }
    this._backEnd = backEnd;
  }

  showData() {
    super.showData();
    console.log('Tecnologías front-end:', this.frontEnd.join(', '));
    console.log('Tecnologías back-end:', this.backEnd.join(', '));
  }
}

//* Inheritance - QAEngineer class
class QAEngineer extends Person {
  constructor(name, surnames, age, email, tools = []) {
    super(name, surnames, age, email);
    this._profession = 'Ingeniero de Calidad (QA)';
    this._tools = tools;
  }

  //* Getters
  get tools() {
    return this._tools;
  }

  //* Setters
  set tools(tools) {
    if (!Array.isArray(tools)) {
      throw new Error('Las herramientas deben ser un array');
    }
    this._tools = tools;
  }

  //* Methods
  sayHello() {
    console.log(`Hola, mi nombre es ${this.name} y soy ${this._profession}.`);
  }

  showData() {
    console.log(
      `%cDatos del ${this._profession}`,
      'color:#1e40af; text-transform:uppercase; font-weight: bold'
    );
    super.showData();
    console.log('Herramientas de QA:', this.tools.join(', '));
  }
}

//* Inheritance - Manager class
class Manager extends Person {
  constructor(name = '', surnames = '', age = 0, email = '', department = '') {
    super(name, surnames, age, email);
    this._department = department;
  }

  //* Getters
  get department() {
    return this._department;
  }

  //* Setters
  set department(department) {
    this._department = department;
  }

  //* Methods
  sayHello() {
    console.log(
      `Hola, mi nombre es ${this.name} y soy la gerente del departamento de ${this.department}.`
    );
  }

  showData() {
    console.log(
      `%cDatos del gerente de ${this.department}`,
      'color:#1e40af; text-transform:uppercase; font-weight: bold'
    );
    super.showData();
    console.log(`Departamento: ${this.department}`);
  }
}

// Create instances of each class
const backEndDeveloper = new BackEndDeveloper(
  'Razvan',
  'Ilies',
  37,
  'razvan.ilies@empresa.com',
  ['JavaScript', 'TypeScript', 'Python'],
  ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'PostgreSQL']
);

const frontEndDeveloper = new FrontEndDeveloper(
  'Carmen',
  'Ciambrino Baz',
  36,
  'carmen.ciambrino@empresa.com',
  ['JavaScript', 'TypeScript'],
  ['HTML5', 'CSS3', 'React.js', 'Redux', 'Bootstrap', 'Tailwind CSS']
);

const fullStackDeveloper = new FullStackDeveloper(
  'Daniel',
  'Pompa Pareja',
  49,
  'daniel.pompa@gmail.com',
  ['JavaScript', 'TypeScript'],
  ['HTML5', 'CSS3', 'React.js', 'Redux', 'Bootstrap', 'Tailwind CSS'],
  ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM']
);

const qaEngineer = new QAEngineer(
  'Adrián',
  'Cividanes Fernández',
  30,
  'adrian.cividanes@empresa.com',
  ['Selenium', 'Jest', 'Cypress']
);

const manager = new Manager(
  'Emma',
  'Ciambrino Baz',
  42,
  'emma.ciambrino@empresa.com',
  'Desarrollo'
);

// Display information
const employees = [
  backEndDeveloper,
  frontEndDeveloper,
  fullStackDeveloper,
  qaEngineer,
  manager,
];

employees.forEach(employee => {
  employee.sayHello();
  employee.showData();
  console.log('\n');
});
