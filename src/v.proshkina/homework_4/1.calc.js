function calc(string) {
  const total1 = string
    .split("")
    .map((item) => item.codePointAt(item))
    .join("");
  const total2 = total1
    .split("")
    .map((item) => item.replace(7, 1))
    .join("");

  let result =
    total1
      .split("")
      .map((item) => Number(item))
      .reduce((sum, current) => {
        return sum + current;
      }, 0) -
    total2
      .split("")
      .map((item) => Number(item))
      .reduce((sum, current) => {
        return sum + current;
      }, 0);

  return result;
}

console.log(calc("ABC"));
//6
console.log(calc("abcdef"));
//6
console.log(calc("ifkhchlhfd"));
//6
console.log(calc("aaaaaddddr"));
//30
console.log(calc("jfmgklf8hglbe"));
//6
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
//96
