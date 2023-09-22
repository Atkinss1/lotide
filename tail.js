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

const tail = (arr) => {
  let emptyArr = [];
  if (!arr) {
    return emptyArr;
  } else {
    return arr.slice(1);
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
const result2 = tail([]);
const result3 = tail(["Lab"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result2[0], "Lighthouse");
assertEqual(result2[0], "Lighthouse");
assertEqual(result3[0], "Lighthouse");