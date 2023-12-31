const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let a = 0; a < arr1.length; a++) {
    if (arr1[a] !== arr2[a]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("The comparisons are equal");
  } else {
    console.log("The comparisons are not equal");
  }
};

const without = (source, itemsToRemove) => {
  const keptItems = source.filter(item => !itemsToRemove.includes(item));
  return keptItems;
};

module.exports = without;
  
  
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
// console.log(words);
