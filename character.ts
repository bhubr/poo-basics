// class sorte de "template" pour creer des objets

// visibilite : public, protected, private (attributs comme methodes)

interface LivingBeing {
  _life: number;

  takeDamage(amount: number): void;
}

class Creature implements LivingBeing {
  _life: number;
  species: string;

  constructor(species: string, life: number) {
    this.species = species;
    this._life = life;
  }

  takeDamage(amount: number) {
    this._life -= amount;
  }
}

class Character implements LivingBeing {
  public _life = 20;

  // raccourci pour declaration d'attribut et assignation
  constructor(public name: string) {}

  getLife() {
    return this._life;
  }

  takeDamage(amount: number) {
    this._life -= amount;
  }

  sayHello() {
    console.log(`Howdy, I'm ${this.name}`);
  }
}

class Wizard extends Character {
  protected _power: number;

  constructor(public name: string, power: number) {
    super(name);
    this._power = power;
  }

  attack(opponent: Character) {
    opponent.takeDamage(2);
  }

  showHealth() {
    console.log(this._life);
  }

  sayHello() {
    console.log(
      `Howdy, I'm ${this.name} and I have power level of ${this._power}`,
    );
  }
}

class Board {
  characters: LivingBeing[] = [];

  addCharacter(ch: LivingBeing) {
    this.characters.push(ch);
  }

  logCharacters() {
    this.characters.forEach((ch) => {
      if (ch instanceof Character) {
        console.log(`Character ${ch.name} has ${ch._life} health points`);
      }
      if (ch instanceof Creature) {
        console.log(
          `Creature is of species ${ch.species} has ${ch._life} health points`,
        );
      }
    });
  }

  logLifePoints() {
    this.characters.forEach((c) => {
      console.log(c._life);
    });
  }

  earthquake() {
    this.characters.forEach((c) => {
      c.takeDamage(5);
    });
  }
}

const gandalf = new Character('Gandalf');
const evilOrc = new Character('Noname');
const galadriel = new Wizard('Galadriel', 10);

// console.log(gandalf, galadriel);

gandalf.sayHello();
galadriel.sayHello();
galadriel.attack(evilOrc);
// console.log(evilOrc);
// galadriel.showHealth();

const drogon = new Creature('dragon', 100);

const board = new Board();
board.addCharacter(evilOrc);
board.addCharacter(galadriel);
board.addCharacter(drogon);
board.logCharacters();

board.earthquake();
board.logLifePoints();
