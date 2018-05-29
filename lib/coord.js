class Coord {
  constructor (str) {
    [this.x, this.y] = str.split(' ').map(Number);
    return this;
  }
  toString () {
    return `${this.x} ${this.y}`
  }
}

module.exports = Coord;