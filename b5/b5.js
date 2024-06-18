var a = 3,
    b = 9,
    c = 5;

function sortNumbers(a, b, c) {
    let temp;

    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }
    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }

    console.log(a, b, c);
}

sortNumbers(a, b, c);
