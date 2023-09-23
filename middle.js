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
  }
  if (!eqArrays(arr1, arr2)) {
    console.log("The comparisons are not equal");
  }
};

const middle = (arr) => {
  let middleIndex = [];
  if (arr.length < 3) {
    return middleIndex;
  }
  if (arr.length % 2 === 1) {
    let middle = Math.floor(arr.length) / 2 | 0;
    console.log(middle);
    middleIndex.push(arr[middle]);
    
  }
  return middleIndex;
};

console.log(middle([1, 2, 3])); // [2]
console.log(middle([1, 2, 3, 4, 5])); // [3]
console.log(middle([1, 2, 3, 4])); // [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // [3, 4]

// assertArraysEqual(middle([1])); // => []
// assertArraysEqual(middle([1, 2])); // => []

// assertArraysEqual(middle([1, 2, 3])); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5])); // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]));// => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]