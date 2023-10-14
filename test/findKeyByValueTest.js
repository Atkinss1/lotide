const { Assertion } = require('chai');
const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('findKeyByValue', () => {
  it('should return the first key that contains the given value', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

  });
});

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};