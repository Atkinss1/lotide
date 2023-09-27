const exp = require('constants');
const { inspect } = require('util');


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
  



const eqObjects = function(object1, object2) {
  
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  
  if (array1.length !== array2.length) {
    return false;
  }
  for (const key of array1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const testObject1 = {
  a: '1',
  b: 2,
};


console.log(assertObjectsEqual(testObject1, {b: 2, a: '1'}));