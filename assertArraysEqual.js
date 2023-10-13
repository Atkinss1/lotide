const eqArrays = require('./eqArrays.js');

// compares two arrays and prints out if they are equal or not
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("The comparisons are equal");
  }
  if (!eqArrays(arr1, arr2)) {
    console.log("The comparisons are not equal");
  }
};

module.exports = assertArraysEqual;
