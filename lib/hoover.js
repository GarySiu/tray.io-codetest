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
  }
  report() {
    console.log(this);
  }
}

module.exports = Hoover;