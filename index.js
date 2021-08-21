import { Wizard, Archer, Warrior } from "./characters/Heroes.js";
import { Spider, Scorpion, Dragon } from "./characters/Enemies.js";
import { Food } from "./foods/Food.js";
import { Poison } from "./foods/superFoods.js";

import { startBattle } from "./combat.js";

const croissant = new Food("🥐", 5);
const poisonApple = new Poison("🍎", -2);
const bread = new Food("🍞", 10);
const pizza = new Food("🍕", 9);

const bexley = new Warrior("Bexley", 10);
const jojo = new Wizard("Jojo", 15);

const spider = new Spider(2);
const scorpion = new Scorpion(5);
const dragon = new Dragon(10);

bexley.pickup(croissant);
bexley.pickup(bread);
bexley.pickup(poisonApple);
bexley.pickup(pizza);
startBattle(bexley, dragon);
