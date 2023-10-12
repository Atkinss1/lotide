const countLetters = require('../countLetters');
const expect = require('chai').expect;

describe('#countLetters', () => {
  it('should return number of letters counted as an object', () =>{
    expect(countLetters('LHL')).to.eql({L: 2, H: 1});
  });
});