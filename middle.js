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
// function called middle, that will return the single middle index of an array if it is odd, and the 2 middle indexes of an array
const middle = (arr) => {
  // created an empty to array that will be returned if the array is 2 or less
  let emptyArr = [];
  if (arr.length < 3) {
    return emptyArr;
  }
  // finding our middle index value by dividing the array in half
  let middleIndex = Math.floor(arr.length / 2);
  // if our array is even it will need to return two indexes
  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
    // if our array is odd, it will return one index
  } else {
    return arr[middleIndex];
  }
};

console.log(middle([1, 2, 3])); // [2]
console.log(middle([1, 2, 3, 4, 5])); // [3]
console.log(middle([1, 2, 3, 4])); // [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // [3, 4]