import { Character } from "./characters/Character.js";
import { Wizard, Archer, Warrior } from "./characters/Heroes.js";
import { Food } from "./Food.js";
import { Poison } from "./superFoods.js";

let id = 0;

const croissant = new Food("🥐", 5);
const poisonApple = new Poison("🍎", -2);
const bexley = new Warrior("Bexley", 10);
const jojo = new Wizard("Jojo", 15);
document.body.innerHTML += bexley.view();
document.body.innerHTML += poisonApple.view();
document.body.innerHTML += jojo.view();

console.log(poisonApple.domElement());
console.log(bexley.domElement());
console.log(jojo.domElement());
