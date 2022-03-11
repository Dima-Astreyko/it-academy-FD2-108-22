// Task № 1.
// Description
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// Source:
//  https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function reverse(value) {
    const array = Array.from(value);
    const length = array.length;
    let target = new Array(length);
    array.forEach((value, index) => {
        target[length - index - 1] = value;
    })
    const result = target.join("");
    return result;
}

// Check
const testWord = "Some word";
const result = reverse(testWord);
console.log(result);

// Task № 2.
// Description:
// Write a function called repeatStr which repeats the given string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
// Source:
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr(times, value) {
    const str = value;
    const count = times;
    let result = "";
    for (let i = 0; i < count; i++) {
        result = result.concat(str);
    }
    return result;
}

// Check

const testWord2 = "Hello world";
const times = 5;
const result2 = repeatStr(times, testWord2);
console.log(result2);

// Task № 3.
// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples:
// Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
// Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
// Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
// Source:
// https://www.codewars.com/kata/highest-and-lowest/

function getHighAndLow(array) {
    const source = array.split(" ");
    let middle = source.map((value) => parseInt(value));
    const max = getMax(middle);
    const min = getMin(middle);
    ;
    const result = max + " " + min;
    return result;
}

function getMax(array) {
    return array.reduce((a, b) => Math.max(a, b));
}

function getMin(array) {
    return array.reduce((a, b) => Math.min(a, b));
}

// Check

const test3 = "1 2 3 7 4";
const result3 = getHighAndLow(test3);
console.log(result3);

// Task № 4.
// Description
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example:
// (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
// Source:
// https://www.codewars.com/kata/isograms/

function isIsogram(value) {
    const source = Array.from(value);
    let result = true;
    source.forEach((letter, index) => {
        if (value.includes(letter) && (value.indexOf(letter) != index)) {
            result = false;
        }
    })
    return result;
}

// Check

const testWord4 = "Some word";
const result4 = isIsogram(testWord4);
console.log(result4);

// Task № 5.
// Description
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// Source:
//  https://www.codewars.com/kata/mumbling/

function accum(value) {
    const source = value;
    let result = "";
    let middleArray = [];
    Array.from(source).forEach((element, index) => {
        let buffer = element.toUpperCase() + element.toLowerCase().repeat(index);
        middleArray.push(buffer);
    })
    result = middleArray.join("-");
    return result;
}

// Check
const testWord5 = "SomeWord";
const result5 = accum(testWord5);
console.log(result5);