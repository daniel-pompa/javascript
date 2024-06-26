// Array of heroes
const heroes = [
  { name: 'Aquiles', health: 100 },
  { name: 'Héctor', health: 100 },
];

// Styles for the console
const styles = [
  'background: linear-gradient(#004aad, #002d4e)',
  'border: none',
  'border-radius: 3px',
  'color: #fff',
  'padding: 8px 16px',
  'text-align: center',
  'font-size: 18px',
  'text-transform: uppercase',
  'font-weight: bold',
].join(';');

/**
 * Function to simulate an attack
 * @param {Object} attacker - The object representing the attacker
 * @param {Object} target - The object representing the target
 */
const attack = (attacker, target) => {
  const damage = Math.floor(Math.random() * 30) + 1;
  console.log(`${attacker.name} ataca a ${target.name} causando ${damage} de daño.`);
  // Reduce target health
  target.health -= damage;
  // Check if target is down
  if (target.health <= 0) {
    console.log(`${target.name} ha caído! Los dioses lloran por él.`);
  } else {
    console.log(`La salud de ${target.name} ahora es ${target.health}`);
  }
};

/**
 * Function to display the winner
 * @param {Object} winner - The object representing the winner
 */
const displayWinner = winner => {
  console.log(
    `\nCon un golpe final de su espada, ${winner.name} se alza como el vencedor en el campo de batalla, con ${winner.health} de salud restante. \nLos ecos de este épico enfrentamiento resonarán a lo largo de las eras, recordando a los valientes héroes de la guerra de Troya.`
  );
};

/**
 * Function to check if all heroes are alive
 * @param {Array} heroes - An array of objects representing the heroes
 * @returns {boolean} Returns true if all heroes have health greater than 0, otherwise returns false
 */
const allHeroesAlive = heroes => {
  // Use the Array.every() method to check if every hero's health property is greater than 0
  return heroes.every(hero => hero.health > 0);
};

/**
 * Function to perform combat
 * @param {Array} heroes - An array of objects representing the heroes
 */
const startCombat = heroes => {
  console.log(
    `%c${heroes[0].name} vs ${heroes[1].name} Comienza el épico combate!`,
    styles
  );
  // Loop until all heroes are alive
  while (allHeroesAlive(heroes)) {
    // Select the attacker and target
    const [attacker, target] = heroes;
    // Perform the attack
    attack(attacker, target);
    // Check if the target is down, if true, exit the loop
    if (target.health <= 0) {
      break;
    }
    // Change roles for the next round
    [heroes[0], heroes[1]] = [heroes[1], heroes[0]];
  }
  // Find the winner
  const winner = heroes.find(hero => hero.health > 0);
  displayWinner(winner);
};

startCombat(heroes);
