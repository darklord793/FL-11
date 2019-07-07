let a1 = prompt('Enter X coordenat for your point A');
let a2 = prompt('Enter Y coordenat for your point A');
let b1 = prompt('Enter X coordenat for your point B');
let b2 = prompt('Enter Y coordenat for your point B');
let c1 = prompt('Enter X coordenat for your point C');
let c2 = prompt('Enter Y coordenat for your point C');

let devidePoint = 2;

let a11 = 0;
let a12 = 0;
let b11 = 6;
let b12 = 6;
let c11 = 3;
let c12 = 3;

let a21 = 2;
let a22 = 3;
let b21 = 2;
let b22 = 5;
let c21 = 4;
let c22 = 8;

let a31 = 7
let a32 = 7;
let b31 = 1;
let b32 = 1;
let c31 = 4;
let c32 = 4;

let a41 = 11;
let a42 = 23;
let b41 = 8;
let b42 = 6;
let c41 = 1;
let c42 = 6;

let a51 = 3;
let a52 = 3;
let b51 = 9;
let b52 = 9;
let c51 = 6;
let c52 = 6;

let a61 = 3;
let a62 = 4;
let b61 = 8;
let b62 = 1;
let c61 = 3;
let c62 = 6;

let centerPoint1 = (+a11 + +b11) / devidePoint === +c11 && (+a12 + +b12) / devidePoint === +c12;
let centerPoint2 = (+a21 + +b21) / devidePoint === +c21 && (+a22 + +b22) / devidePoint === +c22;
let centerPoint3 = (+a31 + +b31) / devidePoint === +c31 && (+a32 + +b32) / devidePoint === +c32;
let centerPoint4 = (+a41 + +b41) / devidePoint === +c41 && (+a42 + +b42) / devidePoint === +c42;
let centerPoint5 = (+a51 + +b51) / devidePoint === +c51 && (+a52 + +b52) / devidePoint === +c52;
let centerPoint6 = (+a61 + +b61) / devidePoint === +c61 && (+a62 + +b62) / devidePoint === +c62;

let yourCenterPoint = (+a1 + +b1) / devidePoint === +c1 && (+a2 + +b2) / devidePoint === +c2;

console.log('Center point result 1 : ' + centerPoint1);
console.log('Center point result 2 : ' + centerPoint2);
console.log('Center point result 3 : ' + centerPoint3);
console.log('Center point result 4 : ' + centerPoint4);
console.log('Center point result 5 : ' + centerPoint5);
console.log('Center point result 6 : ' + centerPoint6);

console.log('Your center point result: ' + yourCenterPoint);

alert('Your center point result: ' + yourCenterPoint);
