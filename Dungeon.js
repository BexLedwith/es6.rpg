export class Dungeon {
  constructor(hero, enemies) {
    let [currentEnemy, ...remainingEnemies] = enemies;
    Object.assign(this, { hero, currentEnemy, remainingEnemies });
  }

  start() {
    this.startBattle();
  }

  next() {
    let [currentEnemy, ...remainingEnemies] = this.remainingEnemies;
    Object.assign(this, { currentEnemy, remainingEnemies });
    if (remainingEnemies.length == 0) {
      this.hero.pickup(currentEnemy);
      this.end();
    } else {
      this.start();
    }
  }

  end() {
    document.body.innerHTML = `
      ${this.hero.view()}
      <h1>🥳Congratulations you completed the dungeon!!</h1>
    `;
  }

  startBattle() {
    let { hero, currentEnemy } = this;
    document.body.innerHTML = `
      ${hero.view()} 
      <button id="attack-button"> Attack </button>
      ${currentEnemy.view()}`;

    hero.initializeInventory();
    hero.prepareForBattle();
    document.getElementById("attack-button").onclick = () => {
      hero.attack(currentEnemy);

      if (isKnockedOut(currentEnemy)) {
        this.endBattle(hero);
      } else {
        currentEnemy.attack(hero);
      }
      if (isKnockedOut(hero)) {
        document.body.innerHTML = `
  ${hero.view()}
  <button id="new-game">Sorry, Try Again</button>`;

        document.getElementById("new-game").onclick = () =>
          window.location.reload();
      }
    };
  }

  endBattle() {
    let { hero } = this;
    if (!isKnockedOut(hero)) {
      hero.levelUp();
    }
    document.body.innerHTML = `
  ${hero.view()}
  <button id="next-battle">Start Another Battle</button>`;

    document.getElementById("next-battle").onclick = () => this.next();
  }
}

const isKnockedOut = (character) => character.hitpoints <= 0;
