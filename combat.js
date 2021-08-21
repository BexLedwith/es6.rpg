export function startBattle(player, opponent) {
  document.body.innerHTML = `
    ${player.view()} 
    <button id="attack-button"> Attack </button>
    ${opponent.view()}`;
}

export function attack(attacker, target) {
  let newHitpoints = target.hitpoints - attacker.level;
  target.updateHitpoints(newHitpoints);

  if (isKnockedOut(attacker) || isKnockedOut(target)) {
    endBattle(attacker);
  }
}

export function isKnockedOut(character) {
  if (character.hitpoints <= 0) {
    return true;
  }
}

export function endBattle(character) {
  document.body.innerHTML = `
  ${character.view()}
  <button id="new-game">Start Another Battle</button>`;
  if (!isKnockedOut(character)) {
    character.level++;
  }
}
