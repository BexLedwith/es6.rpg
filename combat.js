export function startBattle(player, opponent) {
  document.body.innerHTML = `
    ${player.view()} 
    <button id="attack-button"> Attack </button>
    ${opponent.view()}`;
}
