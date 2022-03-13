function calc(x){
  return x
    .split('')
    .map(c => c.charCodeAt(0))
    .join('')
    .split('')
    .map(Number)
    .filter(x => x === 7)
    .length * 6
}