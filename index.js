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

let id = 0;

class Character {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.id = id++;
  }

  view() {
    return `<div class='character'> Name:${this.name} Level:${this.level} </div>`;
  }
}

class Wizard extends Character {
  constructor(name, level) {
    super(name + "🧙🏼", level);
    this.mana = 4 * level;
  }

  restore() {
    this.mana++;
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

const croissant = new Food("🥐", 5);

const bexley = new Wizard("Bexley", 10);
document.body.innerHTML += bexley.view();
document.body.innerHTML += croissant.view();
