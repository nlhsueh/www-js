let numbers = [45, 4, 9, 16, 25];

function mul2(value, index, array) {
    return value * 2;
}
function over18(value, index, array) {
    return value > 18;
}
function sum(total, value, index, array) {
    return total + value;
}

console.log('=== map function ===');
console.log(numbers.map(mul2));
console.log(numbers.map(x => x * 2));
console.log('=== filter function ===');
console.log(numbers.filter(over18));
console.log(numbers.filter(x => x > 18));

console.log('=== reduce function ===');
console.log(numbers.reduce(sum));
console.log(numbers.reduce(function (tot, x) {
    return tot + x;
}, 0));
console.log(numbers.reduce((tot, x) => tot + x, 0));
