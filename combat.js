export const startBattle = (player, opponent) => {
  document.body.innerHTML = `
    ${player.view()} 
    <button id="attack-button"> Attack </button>
    ${opponent.view()}`;

  player.initializeInventory();
  document.getElementById("attack-button").onclick = () =>
    attack(player, opponent);
};

const attack = (attacker, target) => {
  let newHitpoints = target.hitpoints - attacker.level;
  target.updateHitpoints(newHitpoints);

  if (isKnockedOut(target)) {
    endBattle(attacker);
  }
};

const isKnockedOut = (character) => character.hitpoints <= 0;

const endBattle = (character) => {
  if (!isKnockedOut(character)) {
    character.level++;
  }
  document.body.innerHTML = `
  ${character.view()}
  <button id="new-game">Start Another Battle</button>`;
};

/* 
    Challenge:
    
    Write a new function called startDungeon(player, dungeon)
        It should take in an array (dungeon) that is 
        made up of at least 5 Enemy objects, followed
        by 1 Food object as a prize, and of course the player
    For now, simply use array destructuring in this function
        to store the first Enemy in a new variable, 
        call startBattle on it and the player 
        and then console.log() out the rest of the dungeon
*/

export const startDungeon = (player, dungeon) => {
  let [currentEnemy, ...restOf] = dungeon;
  startBattle(player, currentEnemy);
  console.log(restOf);
};
