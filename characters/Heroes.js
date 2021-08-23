import { Character } from "./Character.js";

export class Wizard extends Character {
  constructor(name, level) {
    super(`${name} 🧙🏼`, level);
    this.mana = 4 * level;
  }

  attack(target) {
    let newHitpoints = target.hitpoints - this.level * 1.5;
    target.updateHitpoints(newHitpoints);
    this.updateMana(this.mana - 2);
  }

  restore() {
    this.updateMana(this.mana + 1);
  }

  levelUp() {
    super.levelUp();
    this.mana += 4;
  }

  updateMana(newMana) {
    this.mana = newMana;
    document.getElementById(
      `character-${this.id}-mana`
    ).innerHTML = `Mana: ${this.mana}`;
  }

  prepareForBattle() {
    document.getElementById(`character-${this.id}-restore`).onclick = () =>
      this.restore();
  }

  view() {
    return super.view(
      `
      <div id="character-${this.id}-mana">Mana: ${this.mana}</div>
      <button id="character-${this.id}-restore">Restore</div>

      `
    );
  }
}

export class Archer extends Character {
  constructor(name, level) {
    super(`${name} 🏹`, level);
    this.arrows = 3 * level;
  }

  attack(target) {
    super.attack(target);
    this.updateArrows(this.arrows - 1);
  }

  reload() {
    this.updateArrows(this.arrows + 1);
  }

  levelUp() {
    super.levelUp();
    this.arrows += 3;
  }

  updateArrows(newArrows) {
    this.arrows = newArrows;
    document.getElementById(
      `character-${this.id}-arrows`
    ).innerHTML = `Arrows: ${this.arrows}`;
  }

  prepareForBattle() {
    document.getElementById(`character-${this.id}-reload`).onclick = () =>
      this.reload();
  }

  view() {
    return super.view(
      `
      <div id="character-${this.id}-arrows">Arrows: ${this.arrows}</div>
      <button id="character-${this.id}-reload">Reload</div>

      `
    );
  }
}

export class Warrior extends Character {
  constructor(name, level) {
    super(`${name} ⚔️`, level);
    this.strength = 2.5 * level;
  }

  attack(target) {
    let newHitpoints = target.hitpoints - this.strength;
    target.updateHitpoints(newHitpoints);
    this.updateStrength(this.strength - 1);
  }

  charge() {
    this.updateStrength(this.strength + 1);
  }

  levelUp() {
    super.levelUp();
    this.strength += 2.5;
  }

  updateStrength(newStrength) {
    this.strength = newStrength;
    document.getElementById(
      `character-${this.id}-strength`
    ).innerHTML = `Strength: ${this.strength}`;
  }

  prepareForBattle() {
    document.getElementById(`character-${this.id}-charge`).onclick = () =>
      this.charge();
  }

  view() {
    return super.view(
      `
      <div id="character=${this.id}-strength">Strength: ${this.strength}</div>
      <button id="character-${this.id}-charge">Charge</div>
      `
    );
  }
}
