import { Food } from "./Food.js";

export class Poison extends Food {
  constructor(name, restores) {
    super(`${name} ☠️`, restores);
  }

  burn() {
    this.restores--;
  }

  view() {
    return super.view(`Damage: ${this.id}`);
  }
}
