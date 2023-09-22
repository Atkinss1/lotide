// Function to compare two parameters
const assertEqual = (actual, expected) => {
  // if both parameters are equal to one another it will pass
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    // else it will print fail
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    return arr1.toString() === arr2.toString();
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 1, 2], [2, 3, 5, 7], true));
assertEqual(eqArrays([3, 2, 3], [3, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
assertEqual(eqArrays([1, null, 3], [1, null, 3]), true);