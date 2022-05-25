const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Dragon damage;
const dragonDamage = () => {
  const minDmg = 15;
  const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1)) + minDmg);
  return dragonDmg
}
// console.log(dragonDamage());

// Warrior damage;
const warriorDamage = () => {
  const minDmg = warrior.strength;
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const warriorDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDmg;
}
// console.log(warriorDamage());

//Mage damage
const mageDamage = () => {
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const mageMana = mage.mana;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana',
  };
  if (mageMana > 15) {
    const mageDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDmg;
    return turnStats;
  }
  
  return turnStats;
}
// console.log(mageDamage());

const gameActions = {
  warriorMove: (warriorDamage) => {
    const warriorAttack = warriorDamage(warrior);
    warrior.damage = warriorAttack;
    dragon.healthPoints -= warriorAttack;
  },
  mageMove: (mageDamage) => {
    const mageTurnStats = mageDamage(mage);
    const mageAttack = mageTurnStats.damageDealt;
    mage.damage = mageAttack;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageAttack;
  },
  dragonMove: (dragonDamage) => {
    const dragonAttack = dragonDamage(dragon);
    mage.healthPoints -= dragonAttack;
    warrior.healthPoints -= dragonAttack;
    dragon.damage = dragonAttack;
  },
  turnResults: () => battleMembers,
};
gameActions.warriorMove(warriorDamage);
gameActions.mageMove(mageDamage);
gameActions.dragonMove(dragonDamage);
console.log(gameActions.turnResults());

// console.log(warriorMove(warriorDamage));
// console.log(warriorDamage());
// console.log(mageDamage());
// console.log(dragon.healthPoints);
// console.log(dragonDamage());
// console.log(warrior.healthPoints);
// console.log(mage.healthPoints);