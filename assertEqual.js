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

module.exports = assertEqual;

