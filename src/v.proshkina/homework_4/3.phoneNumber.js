function createPhoneNumber(array) {
  let string = array.join("");
  return (
    "(" +
    string.slice(0, 3) +
    ")" +
    " " +
    string.slice(3, 6) +
    "-" +
    string.slice(-4)
  );
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// => returns "(123) 456-7890"
