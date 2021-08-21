import { Wizard, Archer, Warrior } from "./characters/Heroes.js";
import { Spider, Scorpion, Dragon } from "./characters/Enemies.js";
import { Food } from "./foods/Food.js";
import { Poison } from "./foods/superFoods.js";

import { startBattle, attack, isKnockedOut, endBattle } from "./combat.js";

const croissant = new Food("🥐", 5);
const poisonApple = new Poison("🍎", -2);
const bexley = new Warrior("Bexley", 10);
const jojo = new Wizard("Jojo", 15);

const spider = new Spider(2);
const scorpion = new Scorpion(5);
const dragon = new Dragon(10);

startBattle(bexley, jojo);

bexley.updateHitpoints(20);
