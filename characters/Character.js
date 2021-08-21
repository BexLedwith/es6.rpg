let id = 0;

export class Character {
  constructor(name, level, hitpoints, maxHitpoints) {
    this.name = name;
    this.level = level;
    this.id = id++;
    this.hitpoints = 4 * level;
    this.maxHitpoints = 4 * level;
    this.inventory = [];
  }

  pickup(item) {
    this.inventory.push(item);
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

  getInventoryView() {
    let inventoryView = ``;

    for (const item of this.inventory) {
      inventoryView += item.view();
    }
    return inventoryView;
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
      <div id="character-${id}-inventory"></div>
      <div> ${details} </div>
      </div>
      
      `;
  }
}
