function createPhoneNumber(numbers) {
  let result = '(xxx) xxx-xxxx';

  for (i = 0; i < numbers.length; i++) {
    result = result.replace('x', numbers[i]);
  }

  return result;
}
