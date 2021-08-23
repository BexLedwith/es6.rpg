import { Wizard, Archer, Warrior } from "./characters/Heroes.js";
import { Spider, Scorpion, Dragon } from "./characters/Enemies.js";
import { Food } from "./foods/Food.js";
import { Poison } from "./foods/superFoods.js";

import { Dungeon } from "./Dungeon.js";
import { Character } from "./characters/Character.js";

let dungeonArr = [
  new Spider(1),
  new Spider(1),
  new Spider(2),
  new Spider(3),
  new Scorpion(5),
  new Scorpion(8),
  new Scorpion(13),
  new Dragon(21),
  new Food("🍪", 1000),
];

export const initializeGame = () => {
  //   const croissant = new Food("🥐", 5);
  //   const poisonApple = new Poison("🍎", -2);
  //   const bread = new Food("🍞", 10);
  const pizza = new Food("🍕", 9);
  const sandwich = new Food("🥪", 10);
  const falafel = new Food("🧆", 7);

  const bexley = new Warrior("Bexley", 2);
  const jojo = new Wizard("Jojo", 2);
  const ikaika = new Archer("Ikaika", 2);

  document.body.innerHTML = `

  <h3>Select your hero:<h3>
  ${bexley.view()}
  ${jojo.view()}
  ${ikaika.view()}

  `;

  bexley.domElement().onclick = () => {
    bexley.pickup(falafel);
    let myDungeon = new Dungeon(bexley, dungeonArr);
    myDungeon.start();
  };

  jojo.domElement().onclick = () => {
    jojo.pickup(sandwich);
    let myDungeon = new Dungeon(jojo, dungeonArr);
    myDungeon.start();
  };

  ikaika.domElement().onclick = () => {
    ikaika.pickup(pizza);
    let myDungeon = new Dungeon(ikaika, dungeonArr);
    myDungeon.start();
  };
};
