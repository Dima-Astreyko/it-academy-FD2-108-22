// Task № 1.
// Description
// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
// Source:
//  https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(start, finish) {
    const localStart = start;
    const localFinish = finish;
    const result = new Array(localFinish);
    result.fill(localStart);
    result.reduce((previous, current, index, array) => {
        array[index] = previous + localStart;
        return previous + localStart;

    })
    return result;
}

// Check
let start = 1;
let finish = 5;
console.log(countBy(start, finish));
start = 2;
finish = 10;
console.log(countBy(start, finish));

// Task № 2.
// Description
// Write a function to split a string and convert it into an array of words. For example:
//"Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
// Source:
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d.

function convertToArray(string) {
    let localString = string;
    let array = Array.from(localString);
    let buffer = "";
    let result = [];
    array.forEach(element => {
        if (element === " ") {
            ``
            result.push(buffer);
            buffer = "";
        } else {
            buffer = buffer.concat(element);
        }
    })
    result.push(buffer);
    return result;
}

// Check
let someString = "This is some string";
console.log(convertToArray(someString));

// Task № 3.
// Description
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example:
// For input ,[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] you should return [10, -65].
// Source:
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044.

function getPositivesAndNegatives(array) {
//#region Defensive code
    const localArray = array;
    if (Array.isArray(localArray) && localArray.length < 1) {
        return [];
    }
// #endregion
    const positivesCount = localArray.filter(element => element > 0).length;
    const negativesCount = localArray.filter(element => element < 0).reduce((a, b) => a + b);
    let result = [];
    result.push(positivesCount);
    result.push(negativesCount);
    return result;
}

// Check
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(getPositivesAndNegatives(array));

// Task № 4.
// Description
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// Source:
// https://www.codewars.com/kata/515e271a311df0350d00000f.

function getSumSquared(array) {
    const localArray = array;
    let result = 0;
    localArray.forEach((element, index, array) => {
        result = result + element * element;
    })

    return result;
}

// Check
let array4 = [1, 2, 2];
console.log(getSumSquared(array4));

// Task № 5.
// Description
// Convert number to reversed array of digits.
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
// Source:
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051.

function convertNumber(value) {
    const source = Array.from(value.toString());
    const result = new Array(source.length);
    source.forEach((element, index, array) => {
        result[array.length - 1 - index] = parseInt(element);
    })
    return result;
}

// Check
const number = 348597;
console.log(convertNumber(number));