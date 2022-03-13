function squareDigits(number) {
  let array = String(number)
    .split("")
    .map((item) => Math.pow(Number(item), 2));
  return Number(array.join(""));
}

console.log(squareDigits(9119));
