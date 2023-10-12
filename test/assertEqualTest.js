const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('should return true if actual === expected', () => {
    assert.equal(assertEqual('hello', 'hello'));
  });

  it('should return false if actual !== expected', () => {
    assert.equal(assertEqual('234', '12'));
  });

  it('should return false if actual !== expected', () => {
    assert.strictEqual(assertEqual('111', 111));
  }
  );
});