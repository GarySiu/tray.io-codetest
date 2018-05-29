const Coord = require('./coord');

class Hoover {
  constructor(data) {
    // clean data of Windows line endings and convert to array
    let lines = data.replace(/\r/g, '').split('\n');
    // the last line is special: seperate it and split each character into an array.
    this.instructions = lines.splice(lines.length -1, 1)[0].split('');
    // convert the remainder to coords
    lines = lines.map(c => new Coord(c));
    // destructure the coords into their respective properties
    [this.roomSize, this.startCoord, ...this.dirtCoords] = lines;
    this.curCoord = this.startCoord;
    this.cleaned = 0;
  }
  move(instruction) {
    switch (instruction) {
      case 'N':
        if (this.curCoord.y <= this.roomSize.y - 2) this.curCoord.y++;
        break;
      case 'E':
        if (this.curCoord.x <= this.roomSize.x - 2) this.curCoord.x++;
        break;
      case 'S':
        if (this.curCoord.y >= 1) this.curCoord.y--;
        break;
      case 'W':
        if (this.curCoord.x >= 1) this.curCoord.x--;
        break;
    }
  }
  report() {
    console.log(this);
  }
}

module.exports = Hoover;