const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#assertArraysEqual', () => {
  it('should return true if actual === expected', () => {
    assert.equal(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it('should return false if arrays are not identical', () => {
    assert.equal(assertArraysEqual([1, 1, 2], [2, 3, 5, 7]));
  });

  it('should return false if indexs are not identical', () => {
    assert.equal(assertArraysEqual([1, 2, 3], [2, 1, 3]));
  });
});
