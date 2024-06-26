//* Complex example on the use of objects in JavaScript
// Define the property translations object at a global level
const propertyTranslations = {
  name: 'Nombre',
  age: 'Edad',
  technologies: 'Tecnologías',
  company: 'Empresa',
  experienceYears: 'Experiencia',
  location: 'Ubicación',
};

// Define an object for representing a Full Stack Developer
const fullStackDeveloper = {
  name: 'Daniel',
  surname: 'Pompa',
  age: 49,
  technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],

  // Method to display information about the developer
  displayInfo: () => {
    for (const key in fullStackDeveloper) {
      if (propertyTranslations.hasOwnProperty(key)) {
        const translation = propertyTranslations[key];
        const value = fullStackDeveloper[key];
        if (key === 'technologies') {
          console.log(`${translation}: ${value.join(' - ')}`); // Format technologies as a string
        } else {
          console.log(`${translation}: ${value}`);
        }
      }
    }
  },

  // Method to add a new technology to the developer's stack
  addTechnology: technology => {
    const { technologies, name } = fullStackDeveloper;
    if (!technologies.includes(technology)) {
      technologies.push(technology);
      console.log(`${technology} se ha añadido a la pila tecnológica de ${name}`);
    } else {
      console.log(`${name} ya conoce ${technology}`);
    }
  },

  // Method to check if developer is proficient in the MERN stack
  isMernStackProficient: () => {
    const { technologies, name } = fullStackDeveloper;
    const requiredTechnologies = ['MongoDB', 'Express.js', 'React.js', 'Node.js'];
    for (let tech of requiredTechnologies) {
      if (!technologies.includes(tech)) {
        console.log(`${name} no domina ${tech}`);
        return false;
      }
    }
    console.log(`${name} domina la pila MERN`);
    return true;
  },
};

// Define an object for additional developer information
const additionalInfo = {
  experienceYears: 2,
  company: 'Soluciones Tecnológicas',
  location: 'Madrid',
};

// Merge additional developer information into fullStackDeveloper using object spread
const developerWithAdditionalInfo = {
  ...fullStackDeveloper,
  ...additionalInfo,
  technologies: fullStackDeveloper.technologies.join(' - '), // Format technologies as a string
};

// Method to display additional information about the developer
const displayAdditionalInfo = () => {
  for (const key in developerWithAdditionalInfo) {
    if (propertyTranslations.hasOwnProperty(key)) {
      const translation = propertyTranslations[key];
      const value = developerWithAdditionalInfo[key];
      if (key === 'experienceYears') {
        console.log(`${translation}: ${value} años`);
      } else {
        console.log(`${translation}: ${value}`);
      }
    }
  }
};

// Demonstrate usage
console.log(
  '%cInformación del desarrollador',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

fullStackDeveloper.displayInfo();

console.log(
  '%cAñadir una nueva tecnología',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

fullStackDeveloper.addTechnology('GraphQL');
fullStackDeveloper.addTechnology('React.js');

console.log(
  '%cComprobación del dominio de la pila MERN',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

fullStackDeveloper.isMernStackProficient();

console.log(
  '%cDesarrollador con información adicional',
  'color:#1e40af; text-transform:uppercase; font-weight: bold'
);

displayAdditionalInfo();
