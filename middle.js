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
    return [arr[middleIndex]];
  }
};

module.exports = middle;
