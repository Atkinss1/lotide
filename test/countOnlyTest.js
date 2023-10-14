const countOnly = require('../countOnly');
const expect = require('chai').expect;

describe('#countOnly', () => {
  it('should return an object that includes number of times an item was counted', () => {
    expect(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })).to.eql({ Fang: 2, Jason: 1 });
  });
});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];