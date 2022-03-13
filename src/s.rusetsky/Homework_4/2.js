function squareDigits(num) {
  num = String(num);
  let result = '';
  for (i = 0; i < num.length; i++) {
    result += Number(num[i]) * Number(num[i]);
  }
  return Number(result);
}
