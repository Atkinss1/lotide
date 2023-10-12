const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true if arrays are identical', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('should return false if arrays are not identical', () => {
    assert.isFalse(eqArrays([1, 1, 2], [2, 3, 5, 7]));
  });

  it('should return false if indexs are not identical', () => {
    assert.isFalse(eqArrays([1, 2, 3], [2, 1, 3]));
  });
});