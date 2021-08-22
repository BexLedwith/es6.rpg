import { Wizard, Archer, Warrior } from "./characters/Heroes.js";
import { Spider, Scorpion, Dragon } from "./characters/Enemies.js";
import { Food } from "./foods/Food.js";
// import { Poison } from "./foods/superFoods.js";

import { startBattle, startDungeon } from "./combat.js";
import { Character } from "./characters/Character.js";

const croissant = new Food("🥐", 5);
// const poisonApple = new Poison("🍎", -2);
const bread = new Food("🍞", 10);
const pizza = new Food("🍕", 9);
const sandwich = new Food("🥪", 10);
const falafel = new Food("🧆", 7);

const bexley = new Archer("Bexley", 1);
const jojo = new Wizard("Jojo", 2);

const spider = new Spider(2);
const scorpion = new Scorpion(5);
const dragon = new Dragon(10);

bexley.pickup(croissant);
bexley.pickup(bread);
bexley.pickup(sandwich);
bexley.pickup(pizza);
// startBattle(bexley, dragon);

let myDungeon = [
  new Spider(1),
  new Spider(1),
  new Spider(2),
  new Spider(3),
  new Spider(5),
  new Food("🎂", 25),
];

startDungeon(jojo, myDungeon);

// array destructuring

// let [firstFood, ...leftoverInventory] = bexley.inventory;
// console.log(firstFood.name, leftoverInventory);
