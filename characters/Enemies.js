import { Character } from "./Character.js";

export class Spider extends Character {
  constructor(level) {
    super("Spider 🕷", level);
  }

  attack(target) {
    this.bite(target);
  }

  bite(target) {
    let newHitpoints = target.hitpoints - this.maxHitpoints / 8;
    target.updateHitpoints(newHitpoints);
  }
}

export class Scorpion extends Character {
  constructor(level) {
    super("Scorpion 🦂", level);
  }

  attack(target) {
    this.sting(target);
  }

  sting(target) {
    let newHitpoints = target.hitpoints - this.maxHitpoints / 4;
    target.updateHitpoints(newHitpoints);
  }
}

export class Dragon extends Character {
  constructor(level) {
    super("Dragon 🐉", level);
  }

  attack(target) {
    this.fireBreath(target);
  }
  fireBreath(target) {
    let newHitpoints = target.hitpoints - this.maxHitpoints / 2;
    target.updateHitpoints(newHitpoints);
  }
}
