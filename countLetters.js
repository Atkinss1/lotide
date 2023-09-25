const assertEqual = (actual, expected) => {
  // if both parameters are equal to one another it will pass
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    // else it will print fail
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const removePunctuation = (text) => {
  let punctuation = /[/ /g.,?!]/g;
  let newText = text.replace(punctuation, "");
  return newText;
};

const countLetters = (str) => {
  const letterCount = {};
  let newStr = removePunctuation(str);
  // loop through the string
  for (let letter of newStr) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};


console.log(countLetters('LHL'));
console.log(countLetters('Hi, my name is Jordan.'));