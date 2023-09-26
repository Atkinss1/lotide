const assertEqual = (actual, expected) => {
  // if both parameters are equal to one another it will pass
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    // else it will print fail
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, value) => {
  // takes in an object and scans it, then return the first key that contains the given value
  for (let show of Object.keys(obj)) {
    if (obj[show] === value) {
      return show;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  goodMovie: "Night At The Roxbury"

};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Night At The Roxbury"), "goodMovie");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Dumb and Dumber"), undefined);