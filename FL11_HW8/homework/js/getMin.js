let getMin = (...arg) => arg.sort((a, b) => a - b)[0];

console.log(getMin(3, 0, -3));
