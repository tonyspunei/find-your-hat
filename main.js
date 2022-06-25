const prompt = require('prompt-sync')({sigint: true});
const clear = require("clear-screen")

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.start = {
      x: 0,
      y: 0
    },
    this.hatPos = {
      x: 0,
      y: 0,
    }
    this.locationX = 0;
    this.locationY = 0;
  }

  // Profile a random position on the field
  setPos(offLimit = {x:0, y: 0}) {
    const pos = {
      x: 0,
      y: 0
    }
    do {
      pos.x = Math.floor(Math.random() * this.field[0].length);
      pos.y = Math.floor(Math.random() * this.field.length);
    } while (pos.x === offLimit.x && pos.y === offLimit.y)
  }

  // Define a random starting position
  setStart() {
    this.start = this.setPos();
    this.locationX = this.start.x;
    this.locationY = this.start.y;
    this.field[this.start.y][this.start.x] = pathCharacter;
  }

  print() {
    console.log(this.field.map(row => row.join("")).join("\n"))
  }
}

const a = new Field([
  ['*', '░', 'O', '░', '░', '░', '░', '░', '░', '0'],
  ['░', '░', '░', 'O', '░', 'O', '░', '░', '░', '░'],
  ['░', '░', '░', 'O', '░', 'O', '░', '░', '░', '░'],
  ['░', '░', '^', '░', '░', 'O', '░', '░', '░', '░'],
]);
a.print()