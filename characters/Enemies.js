import { Character } from "./Character.js";

export class Spider extends Character {
  constructor(level) {
    super("Spider 🕷", level);
  }

  bite() {}
}

export class Scorpion extends Character {
  constructor(level) {
    super("Scorpion 🦂", level);
  }

  sting() {}
}

export class Dragon extends Character {
  constructor(level) {
    super("Dragon 🐉", level);
  }

  fireBreath() {}
}
