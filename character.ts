// class sorte de "template" pour creer des objets

// visibilite : public, protected, private (attributs comme methodes)

class Character {
  protected _life = 20;

  // raccourci pour declaration d'attribut et assignation
  constructor(public name: string) {}

  getLife() {
    return this._life;
  }

  // setLife(newValue: number) {
  //   this._life = newValue;
  // }

  takeDamage(amount: number) {
    this._life -= amount;
  }

  sayHello() {
    console.log(`Howdy, I'm ${this.name}`);
  }
}

class Wizard extends Character {
  attack(opponent: Character) {
    opponent.takeDamage(2);
  }

  showHealth() {
    console.log(this._life);
  }
}

class Board {
  characters: Character[] = [];

  addCharacter(ch: Character) {
    this.characters.push(ch);
  }

  logCharacters() {
    this.characters.forEach((ch) => {
      console.log(`Character ${ch.name} has ${ch.getLife()} health points`);
    });
  }
}

const gandalf = new Character('Gandalf');
const evilOrc = new Character('Noname');
const galadriel = new Wizard('Galadriel');

// console.log(gandalf, galadriel);

gandalf.sayHello();
galadriel.attack(evilOrc);
// console.log(evilOrc);
galadriel.showHealth();

const board = new Board();
board.addCharacter(evilOrc);
board.addCharacter(galadriel);
board.logCharacters();
