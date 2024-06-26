/**
 * Object representing the hero Achilles
 * @typedef {Object} Achilles
 * @property {string} name - Name of the hero
 * @property {string} father - Hero father
 * @property {string} mother - Hero mother
 * @property {number} age - Hero age
 * @property {Array<Object>} weapons - Hero weapons
 * @property {Array<Object>} armor - Hero armor
 * @property {string} hometown - Hometown of the hero
 * @property {string} description - Description of the hero
 * @property {string} death - Cause of the hero death
 * @property {Array<string>} titles - Hero titles
 * @property {Object} battles - Battles in which the hero participated
 * @property {string} homeland - Homeland of the hero
 */
const achilles = {
  name: 'Aquiles',
  father: 'Peleo',
  mother: 'Tetis',
  age: 30,
  weapons: [
    { type: 'Lanza', name: 'Dory' },
    { type: 'Espada corta', name: 'Xiphos' },
  ],
  armor: [
    { type: 'Escudo', name: 'Aspis' },
    { type: 'Coraza', name: 'Thorax' },
    { type: 'Yelmo', name: 'Kraneos' },
    { type: 'Grebas', name: 'Knémides' },
  ],
  homeland: 'Grecia',
  hometown: 'Ftía',
  description:
    'El invencible comandante de los mirmidones y el más grande de los guerreros griegos en la Guerra de Troya. Se alzó imponente en el campo de batalla, con su destreza y valentía eclipsando a todos mientras su leyenda se forjaba en cada combate.',
  death:
    'Muerto por una flecha en el talón disparada por Paris. Esta herida fatal, en el único punto vulnerable de Aquiles que Tetis no había sumergido en el río Estigia, terminó con la vida del guerrero más grande de su tiempo.',
  titles: ['El de los pies ligeros', 'Héroe de Troya'],
  battles: {
    'Río Escamandro': 'Victoria',
    Troya: 'Victoria',
    'Duelos con Héctor': 'Victoria',
  },
};

/**
 * Function to display hero details
 * @param {Achilles} hero - Object representing the hero
 */
const displayHeroDetails = hero => {
  // Display header with hero name
  console.log(
    `%cDetalles del héroe ${hero.name}`,
    'color:#1e40af; text-transform:uppercase; font-weight: bold'
  );

  // Mapping for translating property names to Spanish
  const propertyTranslations = {
    name: 'Nombre',
    father: 'Padre',
    mother: 'Madre',
    age: 'Edad',
    weapons: 'Armas',
    armor: 'Armadura',
    homeland: 'Patria',
    hometown: 'Lugar de origen',
    description: 'Descripción',
    death: 'Muerte',
    titles: 'Títulos',
    battles: 'Batallas',
  };

  // Iterate over the hero properties
  for (const key in hero) {
    // Check if the property is directly owned by the hero
    if (Object.prototype.hasOwnProperty.call(hero, key)) {
      const element = hero[key];
      const translatedKey = propertyTranslations[key] || key;
      // Check if the property is an array
      if (Array.isArray(element)) {
        console.log(`${translatedKey}:`);
        // Check if the property is weapons or armor
        if (key === 'weapons' || key === 'armor') {
          element.forEach(item => console.log(`- ${item.type}: ${item.name}`));
        } else {
          console.log(element.join(', '));
        }
      } else if (typeof element === 'object') {
        console.log(`${translatedKey}:`);
        // Iterate over the properties of the object
        for (const subKey in element) {
          if (Object.prototype.hasOwnProperty.call(element, subKey)) {
            console.log(`- ${subKey}: ${element[subKey]}`);
          }
        }
      } else {
        console.log(`${translatedKey}: ${element}`);
      }
    }
  }
};

// Display details of the hero Achilles
displayHeroDetails(achilles);
