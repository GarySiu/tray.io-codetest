const Coord = require('./coord');

class Hoover {
  constructor(data) {
    // clean data of Windows line endings and convert to array
    const lines = data.replace(/\r/g, '').split('\n');
    this.lines = lines;
    this.roomSize = new Coord(lines[0]);
    this.startCoord = new Coord(lines[1]);
    this.dirtCoords = lines.slice(2, lines.length - 1).map(c => new Coord(c))
    this.instructions = lines[lines.length - 1].split('');
  }
  report() {
    console.log(this);
  }
}

module.exports = Hoover;