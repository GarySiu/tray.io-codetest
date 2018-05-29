const Coord = require('../lib/coord');
const assert = require('assert');

describe('Coord', function() {
  describe('#constructor', function() {
    it('should convert a space delimited string to coord', function() {
      const c = new Coord('5 3');
      assert.deepEqual(c, {x: 5, y: 3});
    });
  });
});