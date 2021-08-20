/* 
    Create a class Character for our RPG
    The Character should have name, level and id properties
    
    It should also have its own view() method 
        Which constructs & returns a string representing a div
        With a class of "character"
        The div should include the Character's Name/Level
*/

// name
// restores
// id

/* 
    Create 2 new classes, Archer🏹 & Warrior⚔️
    Similar to Wizard, they should append the relevant emoji 
    to the name
    
    Archers should have a unique property: Arrows
        + arrows should be 3 times the Archer's level
        + a new method: reload() which adds 1 arrow 
  
    Warriors should have a unique property: Strength
        + strength should be 2.5 times the Warrior's level
        + a new method: charge() which adds 1 to their strength 
        
    Create and display at least one Character 
        from each new class
*/

/* 
    Let's get creative, Create an extended class of your own! 
    
    It can be anything that extends our current Character class
        following along with our Wizard/Archer/Warrior classes, or the Food class
        as long as it has at least 1 unique property and method,
        don't forget to "view" it on the dom!
        
    Share a url to the note of your creation with us on Discord!
*/

let id = 0;

class Character {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.id = id++;
  }

  view(details = " ") {
    return `<div class='character'> ${this.name} Lvl:${this.level} ${details}</div>`;
  }
}

class Wizard extends Character {
  constructor(name, level) {
    super(`${name} 🧙🏼`, level);
    this.mana = 4 * level;
  }

  restore() {
    this.mana++;
  }

  view() {
    return super.view(`Mana: ${this.mana}`);
  }
}

class Archer extends Character {
  constructor(name, level) {
    super(`${name} 🏹`, level);
    this.arrows = 3 * level;
  }

  reload() {
    this.arrows++;
  }

  view() {
    return super.view(`Arrows: ${this.arrows}`);
  }
}

class Warrior extends Character {
  constructor(name, level) {
    super(`${name} ⚔️`, level);
    this.strength = 2.5 * level;
  }

  charge() {
    this.strength++;
  }

  view() {
    return super.view(`Strength: ${this.strength}`);
  }
}

class Food {
  constructor(name, restores) {
    this.name = name;
    this.restores = restores;
    this.id = id++;
  }

  view() {
    return `<div class='food'> ${this.name} </div>`;
  }
}

class Poison extends Food {
  constructor(name, restores) {
    super(`${name} ☠️`, restores);
    this.id = id--;
  }

  burn() {
    this.id--;
  }

  view() {
    return super.view(`Damage: ${this.id}`);
  }
}

const croissant = new Food("🥐", 5);
const poisonApple = new Poison("🍎", -2);
const bexley = new Warrior("Bexley", 10);
const jojo = new Wizard("Jojo", 15);
document.body.innerHTML += bexley.view();
document.body.innerHTML += poisonApple.view();
document.body.innerHTML += jojo.view();
