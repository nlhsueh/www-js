
// 0 1 1 2 3 5 8 13
function fibonacci(x) {
    if (x == 0) { return 0; }
    if (x == 1) { return 1; }

    let r = 0;
    let a = 0, b = 1;
    while (x-- >= 2) {
        r = a + b;
        a = b;
        b = r;
    }
    return r;
}


let x = fibonacci(12);
console.log(x);