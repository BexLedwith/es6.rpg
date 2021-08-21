let id = 0;

export class Food {
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
