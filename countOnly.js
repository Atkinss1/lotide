const assertEqual = (actual, expected) => {
  // if both parameters are equal to one another it will pass
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    // else it will print fail
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
        console.log(results);
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);