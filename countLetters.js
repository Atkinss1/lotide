// takes in a string as a parameter and returns an objects with number of times a letter is repeated

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

module.exports = countLetters;