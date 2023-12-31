const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('should return [2] from [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return [3, 4] from [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});