function calc(x) {
  let total1 = x
    .split("")
    .map((item) => item.codePointAt(0))
    .join("");

  let total2 = total1.replace(/7/g, "1");

  function sum(total) {
    return Array.from(total)
      .map((item) => +item)
      .reduce((sum, current) => sum + current, 0);
  }

  return sum(total1) - sum(total2);
}

calc("ABC");

function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((item) => item * item)
      .join("")
  );
}

squareDigits(9119);
