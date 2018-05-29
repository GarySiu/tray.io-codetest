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

    it('should populate data from a string', function() {
      const data1 = 'a\nb\nc';
      const data2 = 'a\nb\nc\nd';
      
      const h1 = new Hoover(data1);
      const h2 = new Hoover(data2);
      
      assert.equal(h1.lines.length, 3);
      assert.equal(h2.lines.length, 4);

      assert.equal(h1.lines[0], 'a');
      assert.equal(h2.lines[3], 'd');
    });

    it('should have the right room size', function() {
      const h = new Hoover(example);
      assert.deepEqual(h.roomSize, [5, 5]);
    });

    it('should have a starting coord', function() {
      const h = new Hoover(example);
      assert.deepEqual(h.startCoord, [1, 2]);
    });

    it('should have the right number of patches of dirt', function() {
      const h = new Hoover(example);
      assert.equal(h.dirtCoords.length, 3)
    });

    it('should convert the dirt strings to coords', function() {
      const h = new Hoover(example);
      assert.deepEqual(h.dirtCoords[0], [1, 0]);
    });

    it('should have the right number of instructions', function() {
      const h = new Hoover(example);
      assert.equal(h.instructions.length, 11);
    });
  });
  describe('#toCoord', function() {
    it('should convert a space seperated string to the form [x,y]', function() {
      const h = new Hoover(example);
      const coord = h.toCoord('5 9');
      assert.deepEqual(coord, [5, 9]);
    });
  });
  describe('#report', function() {
    // TODO: test for stdout output
    it.skip('should work');
  });
});