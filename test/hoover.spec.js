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
  describe('#move', function() {
    it('should handle N if there is space to move', function() {
      const h = new Hoover(example);
      h.move('N');
      assert.deepEqual(h.curCoord, {x: 1, y: 3});
    });
    it('should handle N if there is no space to move', function() {
      const h = new Hoover(example);
      h.curCoord.y = 5;
      h.move('N');
      assert.deepEqual(h.curCoord, {x: 1, y: 5});
    });
    it('should handle E if there is space to move', function() {
      const h = new Hoover(example);
      h.move('E');
      assert.deepEqual(h.curCoord, {x: 2, y: 2});
    });
    it('should handle E if there is no space to move', function() {
      const h = new Hoover(example);
      h.curCoord.x = 4;
      h.move('E');
      assert.deepEqual(h.curCoord, {x: 4, y: 2});
    });
    it('should handle S if there is space to move', function() {
      const h = new Hoover(example);
      h.move('S');
      assert.deepEqual(h.curCoord, {x: 1, y: 1});
    });
    it('should handle S if there is no space to move', function() {
      const h = new Hoover(example);
      h.curCoord.y = 0;
      h.move('S');
      assert.deepEqual(h.curCoord, {x: 1, y: 0});
    });
    it('should handle W if there is space to move', function() {
      const h = new Hoover(example);
      h.move('W');
      assert.deepEqual(h.curCoord, {x: 0, y: 2});
    });
    it('should handle W if there is no space to move', function() {
      const h = new Hoover(example);
      h.curCoord.x = 0;
      h.move('W');
      assert.deepEqual(h.curCoord, {x: 0, y: 2});
    });
  });
  describe('#cleanDirt', function() {
    it('should not do anything if there is no dirt', function() {
      let setup = '1 3\n';
         setup += '0 0\n';
         setup += 'NNNN';
      const h = new Hoover(setup);
      assert.equal(h.dirtCoords.length, 0);
      h.report();
      assert.equal(h.cleaned, 0);
    });
    it('should increment cleaned if it passes over dirt', function() {
      let setup = '1 3\n';
         setup += '0 0\n';
         setup += '0 1\n';
         setup += 'NNNN';
      const h = new Hoover(setup);
      h.report();
      assert.equal(h.cleaned, 1);
    });
    it('should only clean dirt once', function() {
      let setup = '1 3\n';
         setup += '0 0\n';
         setup += '0 1\n';
         setup += 'NNSS';
      const h = new Hoover(setup);
      h.report();
      assert.equal(h.cleaned, 1);
    });
    it('should remove dirt coords once cleaned', function() {
      let setup = '2 3\n';
         setup += '0 0\n';
         setup += '0 1\n';
         setup += '1 1\n';
         setup += 'NNSS';
      const h = new Hoover(setup);
      h.report();
      assert.equal(h.dirtCoords.length, 1);
      assert.deepEqual(h.dirtCoords[0], {x: 1, y: 1});
    });
  });
  describe('#report', function() {
    // TODO: test for stdout output
    it.skip('should work');
  });
});