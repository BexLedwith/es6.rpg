let id = 0;

class Character {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.id = id++;
  }

  domElement() {
    const domElement = document.getElementById(`character-${this.id}`);
    if (domElement) {
      return domElement;
    }
  }

  view(details = " ") {
    return `
    <div class='character' id="character-${this.id}"> 
    ${this.name} Lvl:${this.level} ${details}
    </div>`;
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

  domElement() {
    const domElement = document.getElementById(`food-${this.id}`);
    if (domElement) {
      return domElement;
    }
  }

  view() {
    return `<div class='food' id="food-${this.id}"> 
    ${this.name} 
    </div>`;
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

console.log(poisonApple.domElement());
console.log(bexley.domElement());
console.log(jojo.domElement());
