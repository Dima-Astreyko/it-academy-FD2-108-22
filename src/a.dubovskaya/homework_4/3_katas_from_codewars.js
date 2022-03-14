//Char code calculation

const getCharCodes = str => [...str].map(char => char.charCodeAt()).join('');

const sumCharCodes = charCodes => [...charCodes].reduce((total, charCode) => total + parseInt(charCode), 0);

const calc = x => {
    const total1 = getCharCodes(x);
    const total2 = total1.replace(/7/g, '1');
    return sumCharCodes(total1) - sumCharCodes(total2);
}


//Create Phone Number
function createPhoneNumber(numbers) {
let format = "(xxx) xxx-xxxx";
for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
}
return format;
}

//Square Every Digit
function squareDigits(num){
   let stringFromNum = num.toString();
   let arrayWithResults = [];
   for(let i = 0; i < stringFromNum.length; i++) {
       arrayWithResults[i] = stringFromNum[i] * stringFromNum[i];
   }
   return Number(arrayWithResults.join(''));
}
