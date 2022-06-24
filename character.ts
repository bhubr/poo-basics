// class sorte de "template" pour creer des objets
//
class Character {
  life = 20;

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Howdy, I'm ${this.name}`);
  }
}

class Wizard extends Character {
  attack(opponent: Character) {
    opponent.life -= 2;
  }
}

const gandalf = new Character('Gandalf');
const evilOrc = new Character('Noname');
const galadriel = new Wizard('Galadriel');

// console.log(gandalf, galadriel);

gandalf.sayHello();
galadriel.attack(evilOrc);
console.log(evilOrc);
