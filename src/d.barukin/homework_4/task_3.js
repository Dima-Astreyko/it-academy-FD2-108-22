function squareDigits(num) {
    let string = num.toString();
    let results = [];
    for (var i = 0; i < string.length; i++) {
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
}