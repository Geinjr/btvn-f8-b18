var a = 5;
var b = 10;
console.log(`Trước hoán vị: a = ${a}, b = ${b}`);

a += b;
b = a - b;
a -= b;

console.log(`sau hoán vị: a = ${a}, b = ${b}`);
