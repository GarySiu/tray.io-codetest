const Coord = require('../lib/coord');
const assert = require('assert');

describe('Coord', function() {
  describe('#constructor', function() {
    it('should convert a space delimited string to coord', function() {
      const c = new Coord('5 3');
      assert.deepEqual(c, {x: 5, y: 3});
    });
  });
  describe('#toString', function() {
    it('it should convert a coord to a space delimited string', function() {
      const c = new Coord('4 2');
      assert.equal(c.toString(), '4 2')
    });
  });
});