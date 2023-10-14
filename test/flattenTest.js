const flatten =  require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('should return single array from nested arrays', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('should return single array from deep nested arrays', () => {
    assert.deepEqual(flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});