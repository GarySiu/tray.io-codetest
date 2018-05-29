const Hoover = require('../lib/hoover');
const assert = require('assert');

describe('Hoover', function() {
  let example  = '5 5\n';
      example += '1 2\n'
      example += '1 0\n'
      example += '2 2\n'
      example += '2 3\n'
      example += 'NNESEESWNWW';
  describe('#constructor', function() {

    it('should have the right room size', function() {
      const h = new Hoover(example);
      assert.deepEqual(h.roomSize, {x:5, y: 5});
    });

    it('should have a starting coord', function() {
      const h = new Hoover(example);
      assert.deepEqual(h.startCoord, {x: 1, y: 2});
    });

    it('should have the right number of patches of dirt', function() {
      const h = new Hoover(example);
      assert.equal(h.dirtCoords.length, 3)
    });

    it('should convert the dirt strings to coords', function() {
      const h = new Hoover(example);
      assert.deepEqual(h.dirtCoords[0], {x: 1, y: 0});
    });

    it('should have the right number of instructions', function() {
      const h = new Hoover(example);
      assert.equal(h.instructions.length, 11);
    });
  });
  describe('#report', function() {
    // TODO: test for stdout output
    it.skip('should work');
  });
});