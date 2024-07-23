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

console.log(numbers.map(mul2));
console.log(numbers.filter(over18));
console.log(numbers.reduce(sum));
