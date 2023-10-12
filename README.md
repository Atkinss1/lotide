# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jatkins/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first item in the array
* `tail`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `middle`: take in an array and return the middle-most element(s) of the given array.
* `flatten`: take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `eqArrays`: takes in two arrays and returns true or false, based on a perfect match.
* `assertArraysEqual`: takes in two arrays and console.log an appropriate message to the console.
* `assertEqual`: compare the two values it takes in and print out a message telling us if they match or not.
* `assertObjectsEqual`: take in two objects and console.log an appropriate pass or fail message to the console.
* `countLetters`: take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly`: takes in an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqObjects`: take in two objects and returns true or false, based on a perfect match.
* `findKey`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `letterPositions`: will return all the indices (zero-based positions) in the string where each character is found.
* `map`: will return a new array based on the results of the callback function.
* `takeUntil`: will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

"homepage": "https://github.com/owner/project#readme"