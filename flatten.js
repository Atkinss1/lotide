//function will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array

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
