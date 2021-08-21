export startBattle(player, opponent) {
    return `
    ${player.view()} 
    <button id="attach-button"> Attack </button>
    ${opponent.view()}`
}