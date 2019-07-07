let a = prompt('Enter the length of the side A of the triangle');
let b = prompt('Enter the length of the side B of the triangle');
let c = prompt('Enter the length of the side C of the triangle');

if (+a < +b + +c
  & +b < +c + +a
  & +c < +b + +a
  & +a > 0 & +b > 0 & +c > 0) {
 if (a === b & b === c & c === a) {
  console.log('Eequivalent triangle');
  console.log('Your length of the side : ', 'A = ' + a , 'B = ' + b , 'C = ' + c);
 } else if (a === b || a === c || b === c) {
  console.log('Isosceles triangle');
  console.log('Your length of the side : ', 'A = ' + a , 'B = ' + b , 'C = ' + c);
 } else {
  console.log('Normal triangle');
  console.log('Your length of the side : ', 'A = ' + a , 'B = ' + b , 'C = ' + c);
 }
} else {
 console.log('Triangle doesn’t exist');
 console.log('Your length of the side : ', 'A = ' + a , 'B = ' + b , 'C = ' + c);
}
