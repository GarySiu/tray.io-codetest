class Hoover {
  constructor(data) {
    // clean data of Windows line endings and convert to array
    this.data = data.replace(/\r/g, '').split('\n');
  }
  report() {
    console.log(this.data);
  }
}

module.exports = Hoover;