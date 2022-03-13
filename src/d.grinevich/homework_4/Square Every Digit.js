function squareDigits(num) {
    let str = num.toString().split("")
    const newArray = str.map((value) => value * value)
    return Number(newArray.join(""));
}
console.log(squareDigits(3221));
console.log(squareDigits(1111));
console.log(squareDigits(5115));