let id = 0;

export class Character {
  constructor(name, level, hitpoints, maxHitpoints) {
    this.name = name;
    this.level = level;
    this.id = id++;
    this.hitpoints = 4 * level;
    this.maxHitpoints = 4 * level;
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
      </div>
      <div id="character-${this.id}-hitpoints">
      ${this.hitpoints} / ${this.maxHitpoints}
      </div>
      `;
  }
}
