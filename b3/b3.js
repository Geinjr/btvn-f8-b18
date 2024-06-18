var a = 5;
var b = 8;
var c = 10;
var max;

if (a > b && a > c) {
    max = a;
} else if (b > a && b > c) {
    max = b;
} else {
    max = c;
}

console.log(`Giá trị lớn nhất = ${max}`);
