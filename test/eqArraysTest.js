const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 1, 2], [2, 3, 5, 7]), false);
assertEqual(eqArrays([3, 2, 3], [3, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, null, 3], [1, null, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);