// Task № 1.
// Description
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
// Examples:
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false
// Source:
//  https://www.codewars.com/kata/57a5015d72292ddeb8000b31

function isPalindrome(value) {
    const direct = value;
    const reversed = reserveString(value)
    return direct === reversed;
}

function reserveString(value) {
    const letters = Array.from(value);
    reversedLetters = letters.reverse();
    return reversedLetters.join(""); // It is important add empty string as a delimiter to get right result.
}

// Check
let value1 = "anna";
var answer = isPalindrome(value1) ? "" : " not";
console.log("Word '" + value1 + "' is" + answer + " a palidrome.");
let value12 = "not an anna";
answer = isPalindrome(value12) ? string.empty() : "not";
console.log("Word '" + value12 + "' is " + answer + " a palidrome.");

// Task № 2.
// Description
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array
// - the array can't be empty
// - only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.
// Examples:
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
// [4, 3, 2, 5] would return [4, 3, 2, 6]
// Source:
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function convertToDigitAndAddOne(digitArray) {
    // Defensive code.
    if (digitArray === undefined || digitArray == null) return null;
    const digitArrayLocal = Array.from(digitArray);
    if (digitArrayLocal.length < 1 || arrayHasNotDigitInterger(digitArrayLocal)) {
        return null;
    }

    let digit = convertToDigit(digitArrayLocal);
    const resultArray = Array.from((digit + 1).toString());
    return resultArray;
}

function arrayHasNotDigitInterger(digitArray) {
    return Array.from(digitArray).some(x => {
        let digitAsString = x.toString();
        return digitAsString.includes(".");
    })
}

function convertToDigit(numericArray) {
    const tensSignUnit = 10;
    let numberDigit = 1;
    let resultDigit = 0;
    const arrayLength = numericArray.length;
    for (let i = arrayLength - 1; i >= 0; i--) {
        resultDigit = resultDigit + numericArray[i] * numberDigit;
        numberDigit = numberDigit * tensSignUnit;
    }
    return resultDigit;
}

// Check
let value2 = [3, 4, 5, 9];
var value21 = convertToDigit(value2);
console.log(convertToDigitAndAddOne(value2));
console.log(convertToDigitAndAddOne(value21));
console.log(convertToDigitAndAddOne(null));
console.log(convertToDigitAndAddOne(undefined));
console.log(convertToDigitAndAddOne([]));

// Task № 3.
// Description
// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
// Examples:
// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note:
// The subarrays should be filled with 1s
// Source:
// https://www.codewars.com/kata/515f51d438015969f7000013

function pyramid(length) {
    if (length < 0) return null;
    const localLength = length;
    if (localLength === 0) return [];
    let nestedArray = [];
    const addingValue = 1;
    for (let i = 0; i < localLength; i++) {
        let currentLength = nestedArray.length;
        nestedArray.push(generateArrayWithSameValue(currentLength + 1, addingValue));
    }
    return nestedArray;
}

function generateArrayWithSameValue(arrayLength, value) {
    if (arrayLength < 0) return null;
    const localArrayLength = arrayLength;
    const localValue = value;
    const arrayWithSameValue = Array(localArrayLength).fill(localValue);
    return arrayWithSameValue;
}

// Check
const arrayLength = 5;
console.log(pyramid(arrayLength,));

// Task № 4.
// Description
// Write a function that flattens an Array of Array objects into a flat Array.
// Your function must only do one level of flattening.
// Example:
// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]
// Source:
// https://www.codewars.com/kata/5250a89b1625e5decd000413

function flatten(flatteningArray) {
    if (flatteningArray == null) return null;
    if (flatteningArray == undefined) return null;

    let localFlatteningArray = Array.from(flatteningArray);
    if (localFlatteningArray.length === 0) return [];
    let flattenedArray = [];
    localFlatteningArray.forEach((element) => {
        if (Array.isArray(element)) {
            Array.from(element).forEach(nestedElement => {
                flattenedArray.push(nestedElement);
            });
        } else {
            flattenedArray.push(element);
        }
    })
    return flattenedArray;
}

// Check
let flatteningArray = [[1, 2, 3], ["a", "b", "c"], [1, 2, 3]];
console.log(flatten(flatteningArray));
flatten(flatteningArray).forEach(value => {
    console.log(value);
})

// Task № 5.
// Description
// Given a sequence of numbers, find the largest pair sum in the sequence.
// Examples:
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.
// https://www.codewars.com/kata/556196a6091a7e7f58000018

function getNumbersPairOfMaxSum(numberArray) {
    // Defensive clauses.
    if (numberArray == null) return null; // Value described as array should not be null.
    if (numberArray == undefined) return null; // Value described as array should not be undefined.
    const localNumberArray = Array.from(numberArray);
    if (localNumberArray.length < 2) return null; // Array should be at least length of 2.
    if (localNumberArray.some((element) => (parseInt(element) == undefined))) return null; // Any array element should be an integer number valued.

    // Main logic code.
    let maxSumOfNumbers = 0;
    localNumberArray.forEach((element, index) => {
        localNumberArray.forEach((otherElement, otherIndex) => {
            if (index !== otherIndex) {
                let currentNumberSum = element + otherElement;
                if (currentNumberSum > maxSumOfNumbers) maxSumOfNumbers = currentNumberSum;
            }
        });
    });
    return maxSumOfNumbers;
}

// Check
let numberArray = [10, 14, 2, 23, 19];
console.log(getNumbersPairOfMaxSum(numberArray));