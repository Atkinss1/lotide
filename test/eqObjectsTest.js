const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('should return true if both objects have identical keys and values', () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
});

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };