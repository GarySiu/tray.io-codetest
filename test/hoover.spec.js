const Hoover = require('../lib/hoover');
const assert = require('assert');

describe('Hoover', function() {
  describe('#constructor', function() {

    let example  = '5 5\n';
        example += '1 2\n'
        example += '1 0\n'
        example += '2 2\n'
        example += '2 3\n'
        example += 'NNESEESWNWW';

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
      const h1 = new Hoover(example);
      assert.deepEqual(h1.roomSize, [5, 5])
    });

    it('should have the right number of patches of dirt', function() {
      const h1 = new Hoover(example);
      assert.equal(h1.dirtCoords.length, 4)
    });

    it('should convert the dirt strings to coords', function() {
      const h1 = new Hoover(example);
      assert.deepEqual(h1.dirtCoords[0], [1, 2]);
    });

    it('should have the right number of instructions', function() {
      const h1 = new Hoover(example);
      assert.equal(h1.instructions.length, 11);
    });
  });
  describe('#report', function() {
    // TODO: test for stdout output
    it.skip('should work');
  });
});