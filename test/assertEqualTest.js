const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('should return true if actual === expected', () => {
    assert.equal('hello', 'hello');
  });

  it('should return false if actual !== expected', () => {
    assert.notEqual('234', '12');
  });

  it('should return false if actual !== expected', () => {
    assert.notStrictEqual('111', 111);
  }
  );
});