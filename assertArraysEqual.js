const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let a = 0; a < arr1.length; a++) {
      if (arr1[a] !== arr2[a]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("The comparisons are equal");
  } else {
    console.log("The comparisons are not equal");
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);