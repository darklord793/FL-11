function addOne(x) {
    return x + 1;
  }
function pipe(number, ...args) {
  let result = number;
  for (let x = 0; x < args.length; x++) {
    result = args[x](result);
  }
  return result;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));
