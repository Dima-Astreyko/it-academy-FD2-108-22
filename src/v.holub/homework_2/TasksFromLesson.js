// Task 1.
// Description:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
// Source:
// https://www.codewars.com/kata/54ff3102c1bad923760001f3.

function getVowelsCount(someText) {
    // Defensice clauses.
    if (someText == null) return null;
    if (someText == undefined) return null;
    if (someText === "") return 0;

    const someTextLocal = someText;
    const consideredAsVowels = ["a", "e", "i", "o", "u"];
    const initialValue = 0;
    return Array.from(someTextLocal).reduce((accumulator, currentValue) => {
        return consideredAsVowels.includes(currentValue) ? accumulator + 1 : accumulator;
    }, 0);
}

// Check
let someText = "some text";
console.log(getVowelsCount(someText));

// Task 2.
// Description:
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
// Example:
// Kata.getMiddle("test") should return "es".
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// Imput:
// A word (string) of length 0 < str < 1000
// (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).
// You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// Output:
// The middle character(s) of the word represented as a string.
// Source:
// https://www.codewars.com/kata/56747fd5cb988479af000028.

function getMiddle(someText) {
    const someTextLocal = someText;
    const lettersCount = Array.from(someTextLocal).length;
    if (!isOdd(lettersCount)) {
        if (lettersCount === 2) return someTextLocal;
        return someTextLocal.slice(lettersCount / 2 - 1, lettersCount / 2 + 1);
    }
    ;
    if (lettersCount === 1) return someTextLocall;
    return someTextLocal.slice((lettersCount - 1) / 2, (lettersCount - 1) / 2 + 1);
}

function isOdd(number) {
    return number % 2;
}

// Check
const text21 = "test";
const text22 = "testing";
const text23 = "middle";
console.log(getMiddle(text21));
console.log(getMiddle(text22));
console.log(getMiddle(text23));
// console.log("test is " +  "test".slice(1, 3));

// Task 3.
// Description:
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// Example:
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.
// Source:
// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819.

function combine(objA, objB) {
    if (objA == null || objA == undefined) return null;

    for (const property in objB) {
        objA[property] = (objA[property] == undefined ? 0 : objA[property]) + objB[property];
    }
    return objA;
}

// Check
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
console.log(combine(objA, objB));

// Task 4.
// Description:
// Отсортировать по возрасту пользователей.

function sortUsersByAge(users) {
    if (users == null) return null;
    if (users == undefined) return null;
    if (!Array.isArray(users)) return null;

    const usersLocal = Array.from(users);
    if ( usersLocal.length === 0 ) return [];
    return usersLocal.sort((a, b) => a.age - b.age);
}

function generateUsers(){
    return [
        new User('Bob', 'Dillan', 26),
        new User('Super', 'Master', 55),
        new User('Pure', 'Animal', 22),
        new User('Crisis', 'Age', 35),
        new User('VeryClever', 'Guy', 75)
    ];
}

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

// Check
const generatedUsers = generateUsers();
console.log(sortUsersByAge(generatedUsers));

// Task 5.
// Description:
// Найти средний возраст пользователей.

function getAverageUsersAge(users) {
    if (users == null) return null;
    if (users == undefined) return null;
    if (!Array.isArray(users)) return null;

    const usersLocal = Array.from(users);
    if ( usersLocal.length === 0 ) return [];

    const usersAgeSum = usersLocal.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
    const average = usersAgeSum / usersLocal.length;
    const precision = 5;
    return Math.round(average.toFixed(precision));
}

// Check
console.log(getAverageUsersAge(generateUsers()));

// Task 6.
// Description:
// Найти самого старшего/младшего пользователя.

function getOldestUser(users) {
    const sortedUsers = sortUsersByAge(users);
    if (sortedUsers == null) return null;
    if (sortedUsers.length == 0) return null;
    return  Array.from(sortedUsers)[sortedUsers.length - 1];
}

function getYangestUser(users) {
    const sortedUsers = sortUsersByAge(users);
    if (sortedUsers == null) return null;
    if (sortedUsers.length == 0) return null;
    return  Array.from(sortedUsers)[0];
}

// Check
console.log(getOldestUser(generateUsers()));
console.log(getYangestUser(generateUsers()));