function createPhoneNumber(numbers){
    const arrayFirstThreeLetters = [];
    const arrayMiddle = [];
    const lastNumbers = []
    for(let i = 0; i < 3;i++){
        arrayFirstThreeLetters.push(numbers[i])
    }
    for(let i = 3; i < 6;i++){
        arrayMiddle.push(numbers[i])
    }
    for(let i = 6; i < numbers.length;i++){
        lastNumbers.push(numbers[i]) 
    }
    return '('+arrayFirstThreeLetters.join("")+') ' + arrayMiddle.join("") + "-" + lastNumbers.join("")
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));