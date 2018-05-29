class Coord {
  constructor (str) {
    [this.x, this.y] = str.split(' ').map(Number);
    return this;
  }
}

module.exports = Coord;