let id = 0;

export class Food {
  constructor(name, restores) {
    let myFood = { name, restores, id };
    id++;
    Object.assign(this, myFood);
    // this.name = name;
    // this.restores = restores;
    // this.id = id++;
  }

  domElement() {
    const domElement = document.getElementById(`food-${this.id}`);
    if (domElement) {
      return domElement;
    }
  }

  view() {
    let { id, name } = this;
    return `<div class='food' id="food-${id}"> 
      ${name} 
      </div>`;
  }
}
