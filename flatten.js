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

const flatten = (arr) => {
  let flattenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattenArr.push(arr[i]);
    } else {
      flattenArr = flattenArr.concat(flatten(arr[i]));
    }
  }
  return flattenArr;
};

module.exports = flatten;

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])); // => [1, 2, 3, 4, 5, 6]
