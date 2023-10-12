const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

describe('#assertObjectsEqual', () => {
  it('should return true if objects are identical', () => {
    assert.equal(assertObjectsEqual(object1, object2));
  });

  it('should return false if objects are not equal', () => {
    assert.equal(assertObjectsEqual(object3, object4));
  });
});

const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };
const object3 = { a: { y: 0, z: 1 }, b: 2 };
const object4 = { a: { z: 1 }, b: 2 };