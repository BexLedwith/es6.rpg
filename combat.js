export const startBattle = (player, opponent) => {
  document.body.innerHTML = `
    ${player.view()} 
    <button id="attack-button"> Attack </button>
    ${opponent.view()}`;

  player.initializeInventory();
  player.prepareForBattle();
  document.getElementById("attack-button").onclick = () => {
    player.attack(opponent);

    if (isKnockedOut(opponent)) {
      endBattle(player);
    }
  };
};

const isKnockedOut = (character) => character.hitpoints <= 0;

const endBattle = (character) => {
  if (!isKnockedOut(character)) {
    character.levelUp();
  }
  document.body.innerHTML = `
  ${character.view()}
  <button id="new-game">Start Another Battle</button>`;
};

export const startDungeon = (player, dungeon) => {
  let [currentEnemy, ...restOf] = dungeon;
  startBattle(player, currentEnemy);
};
