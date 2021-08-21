let id = 0;

export class Character {
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
