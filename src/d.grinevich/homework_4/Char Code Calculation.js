function calc(x) {
    let str = x.split("")
    const array = str.map((item) => item.charCodeAt())
    let newStr = array.join("");
    let reStr = newStr.replace(/7/g, "1")
    let total1 = 0;
    let total2 = 0;
    for (const iterator of newStr) {
        total2 += Number(iterator)
    }
    for (const iterator of reStr) {
        total1 += Number(iterator)
    }
    return total2 - total1
}
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
console.log(calc('aaaaaddddr'));
console.log(calc('jfmgklf8hglbe'));