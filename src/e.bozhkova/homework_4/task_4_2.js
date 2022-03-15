function calc(x){
  let total =(str)=> [...str]
  .map((el,id)=>el.charCodeAt())
  .join('');
  let total1 = [...total(x)].reduce((accum,el)=>accum+parseInt(el),0);
  let total2 = [...total(x).replace(/7/g, '1')].reduce((accum, el)=>accum+parseInt(el),0);
  return total1 - total2;
}

function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

function squareDigits(num){
  return parseInt(num.toString()
    .split('')
    .reduce((accum,el)=>accum+Math.pow(parseInt(el),2),''));
}