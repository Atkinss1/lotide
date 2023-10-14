const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


describe('#letterPositions', () => {
  it('should return an object displaying each character in the string and its corresponding index', () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), ({
      l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      ' ': [ 10, 13, 17 ],
      n: [ 12 ]
    }));
  });
});