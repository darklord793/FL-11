function Fighter (fighterData) {
  this.wins = 0;
  this.losses = 0;

  let maxProb = 100;

  this.getWins = () => this.wins;
  this.getLosses = () => this.losses;
  this.getName = () => fighterData.name;
  this.getDamage = () => fighterData.damage;
  this.getAgility = () => fighterData.agility;
  this.getHealth = () => fighterData.hp;

  this.attack = function(kick) {
    let success = parseInt( Math.random()*maxProb );
    if (success < kick.getAgility()) {
      kick.dealDamage(this.getDamage());
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${kick.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }
  this.logCombatHistory = function() {
    console.log(`Name: ${fighterData.name}, Wins: ${this.wins}, Losses: ${this.losses}`);
  }

  this.dealDamage = function(attackDamage) {
    fighterData.hp < attackDamage ? fighterData.hp = 0 : fighterData.hp -= attackDamage;
  }
  this.addWin = function() {
    this.wins = this.getWins() + 1 || 1;
  }

  this.addLoss = function() {
      this.losses = this.getLosses() + 1 || 1;
  }
}

let minHP = 0;
let spase = '\n'

function battle (first, second) {
    console.log(`Battle begin! ${first.getName()}! VS ${second.getName()}! ${spase}Fight!`)
    while (first.getHealth() > minHP && second.getHealth() > minHP) {
        first.attack(second);
        second.attack(first);

        if (first.getHealth() === minHP & second.getHealth() > minHP) {
          first.addLoss();
          second.addWin();
          console.log(`${second.getName()} win in fight!`);
          console.log(`${first.getName()} is dead and cant't fight.`);

        } else if (second.getHealth() === minHP & first.getHealth() > minHP ){
          first.addWin();
          second.addLoss();
          console.log(`${first.getName()} win in fight!`);
          console.log(`${second.getName()} is dead and cant't fight.`);
        }
    }
}

function hpInfo (hpData) {
  return console.log(`Name: ${hpData.getName()}, Hial point ${hpData.getHealth()}`);
}

const amrTramp = new Fighter({name: 'Donald AmrTramp', damage: 20, hp: 100, agility: 50});
const rosPutin = new Fighter({name: 'Valodya RosPutin', damage: 20, hp: 100, agility: 50});

console.log(battle(amrTramp, rosPutin));
console.log(amrTramp.logCombatHistory());
console.log(rosPutin.logCombatHistory());
console.log(hpInfo(amrTramp));
console.log(hpInfo(rosPutin));
