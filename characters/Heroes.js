import { Character } from "./Character.js";

export class Wizard extends Character {
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

export class Archer extends Character {
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

export class Warrior extends Character {
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
