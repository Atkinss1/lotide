const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const without = require('./without');
const flatten = require('./flatten');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');


module.exports = {
  head,
  tail,
  middle,
  without,
  flatten,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil
};