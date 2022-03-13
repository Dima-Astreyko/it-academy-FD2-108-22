function calc(str) {
  let total1 = '';
  let total2 = '';
  let result1 = 0;
  let result2 = 0;

  for (i = 0; i < str.length; i++) {
    total1 += str.charCodeAt(i);
  }

  for (i = 0; i < total1.length; i++) {
    if (total1[i] === '7') {
      total2 += '1';
    } else {
      total2 += total1[i];
    }
  }

  for (i = 0; i < total1.length; i++) {
    result1 += Number(total1[i]);
    result2 += Number(total2[i]);
  }
  return result1 - result2;
}
