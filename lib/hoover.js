class Hoover {
  constructor(data) {
    // clean data of Windows line endings and convert to array
    const lines = data.replace(/\r/g, '').split('\n');
    this.lines = lines;
    this.roomSize = this.toCoord(lines[0]);
    this.startCoord = this.toCoord(lines[1]);
    this.dirtCoords = lines.slice(2, lines.length - 1).map(this.toCoord)
    this.instructions = lines[lines.length - 1].split('');
  }
  toCoord(str) {
    // consider a seperate coord class
    return str.split(' ').map(Number);
  }
  report() {
    console.log(this);
  }
}

module.exports = Hoover;