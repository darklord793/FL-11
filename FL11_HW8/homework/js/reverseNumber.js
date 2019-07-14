function reverseNumber (x) {
  let reverse = 0;
  let sign = Math.sign(x);
  x = Math.abs(x);

  if ((Number.MAX_SAFE_INTEGER > x)&&(x > 0)) {
      while (x) {
        reverse *= 10;
        reverse += x % 10;
        x = Math.floor(x / 10);
      }
      return reverse * sign;
  }
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
