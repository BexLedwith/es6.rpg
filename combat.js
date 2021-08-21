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
