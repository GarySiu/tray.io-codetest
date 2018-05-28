const Hoover = require('../lib/hoover');
const assert = require('assert');

describe('Hoover', function() {
  describe('#constructor', function() {
    it('should populate data from a string', function() {
      const data1 = `a\nb\nc`;
      const data2 = `a\nb\nc\nd`;
      
      const h1 = new Hoover(data1);
      const h2 = new Hoover(data2);
      
      assert.equal(h1.data.length, 3);
      assert.equal(h2.data.length, 4);

      assert.equal(h1.data[0], 'a');
      assert.equal(h2.data[3], 'd');
    });
  });
  describe('#report', function() {
    // TODO: test for stdout output
    it.skip('should work');
  });
});