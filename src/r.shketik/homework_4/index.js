
function createPhoneNumber(arrayNumber){
 
    let Parentheses = arrayNumber.splice(0,3).join("")
    let number1 = arrayNumber.splice(0,3).join("")
    let number2 = arrayNumber.splice(0,2).join("")
    let number3 = arrayNumber.splice(0,2).join("")
    let result= `(${Parentheses}) ${number1}-${number2}-${number3}`;
    
    return result
}

console.log(createPhoneNumber([8,8,8,6,6,6,5,5,4,4]));

/*--------------------------------------------------------------*/


function squareNumber(num){

let newArr = [];

let arrNumber = [...`${(num)}`];

arrNumber.forEach(elem => {
  newArr.push(Math.pow(elem, 2));
});

let result = Number(newArr.join(""));
return result
}

console.log(squareNumber(9119))

/*---------------------------------------------------------------*/

function charCodeCalculation(str){
  
  let arrNumber = []
  
  let arrStr = [...`${str}`];

  arrStr.forEach(elem => {
    arrNumber.push( elem.charCodeAt(0));
    });

    let total1 = Number(arrNumber.join(""))
    
    let arrTotal1 = (""+total1).split("").map(Number);
    
    let arrTotal2 = []

    arrTotal1.forEach(elem => {
      if(elem != 7){
        arrTotal2.push(Number(elem))
      }else{
        arrTotal2.push(Number(elem = 1))
      }
      });

  let total2 = Number(arrTotal2.join(""))

  let resultTotal1 = arrTotal1.map(i=>x+=i, x=0).reverse()[0]
  let resultTotal2 = arrTotal2.map(i=>x+=i, x=0).reverse()[0]

  let arrayDifference = resultTotal1 - resultTotal2 
  
  console.log(arrNumber)
 
  console.log(total1)
  console.log(total2)

  console.log(resultTotal1)
  console.log(resultTotal2)

  return arrayDifference;
  
}
console.log( charCodeCalculation("ABC"));

