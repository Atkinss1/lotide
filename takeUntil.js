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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  let results = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      results.push(element);
    }
  }
  return results;

};


const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);