export const startBattle = (player, opponent) => {
  document.body.innerHTML = `
    ${player.view()} 
    <button id="attack-button"> Attack </button>
    ${opponent.view()}`;

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

const isKnockedOut = (character) => {
  if (character.hitpoints <= 0) {
    return true;
  }
};

const endBattle = (character) => {
  if (isKnockedOut(character)) {
    document.body.innerHTML = `
  ${character.view()}
  <button id="new-game">Start Another Battle</button>`;
  } else {
    character.level++;
    document.body.innerHTML = `
  ${character.view()}
  <button id="new-game">Start Another Battle</button>`;
  }
};
