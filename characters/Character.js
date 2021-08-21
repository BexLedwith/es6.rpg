let id = 0;

export class Character {
  constructor(name, level, hitpoints, maxHitpoints) {
    this.name = name;
    this.level = level;
    this.id = id++;
    this.hitpoints = 4 * level;
    this.maxHitpoints = 4 * level;
  }

  updateHitpoints(newHitpoints) {
    this.hitpoints = newHitpoints;
    let { id, hitpoints, maxHitpoints } = this;
    document.getElementById(
      `character-${id}-hitpoints`
    ).innerHTML = `HP: ${hitpoints}/${maxHitpoints}`;
  }

  domElement() {
    const domElement = document.getElementById(`character-${this.id}`);
    if (domElement) {
      return domElement;
    }
  }

  view(details = " ") {
    let { name, level, id, hitpoints, maxHitpoints } = this;
    return `
      <div class='character' id="character-${this.id}"> 
      <div>${name}</div> 
      <div>Lvl:${level}</div> 
      <div id="character-${id}-hitpoints">
      HP: ${hitpoints} / ${maxHitpoints}
      </div>
      <div> ${details} </div>
      </div>
      
      `;
  }
}
