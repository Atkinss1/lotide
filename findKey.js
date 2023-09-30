// Function to compare two parameters
const assertEqual = (actual, expected) => {
  // if both parameters are equal to one another it will pass
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    // else it will print fail
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

const stars = {
  blueHill: { stars: 1 },
  akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  ora: { stars: 2 },
  akelarre: { stars: 3 }
};


console.log((findKey(stars, x => x.stars < 2)));
console.log((findKey(stars, x => x.stars ===  2)));

assertEqual(findKey(stars, x => x.stars < 2), "blueHill");
assertEqual(findKey(stars, x => x.stars === 3), ("akaleri"));
assertEqual(findKey(stars, x => x.stars < 2), "blueHill");
assertEqual(findKey(stars, x => x.stars < 2), "blueHill");
