/* calc Char Code  */

function calc(x){
    let str = x.split("");
    let arr = str.map((item) => item.charCodeAt())
    let newStr = arr.join("");
    let reStr = newStr.replace(/7/g, "1");
    let total1 = 0;
    let total2 = 0;
    for (const iterator of newStr){
        total2 += Number(iterator)
    }
    for (const iterator of reStr){
        total1 +=Number(iterator);
    }
    return total2 - total1;
}

console.log(calc("asdfaasdfasasdasdasdasdasd"));

/* return phone num */

function phoneNumConvert(phone){
    let format = "(xxx) xxx-xxxx";
    for(let i =0; i<phone.length; i++){
        format = format.replace("x", phone[i]);
    }
    return format;
}    
console.log(phoneNumConvert([8,7,3,4,5,6,7,8,9, 1]));


/* Square Every Digit */
function square(num){
    let result = "";
    let newNum = num.toString();
    for(let i = 0; i<newNum.length; i++){
        result = result + (newNum[i]**2).toString();
    }
    return Number(result);
    

}
console.log(square(9119));