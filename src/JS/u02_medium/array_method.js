
let arr = [
    [98, 95, 98],
    [60, 22, 12],
    [70, 55, 72],
    [99, 99, 99]
];

console.log('arr: ', arr);

console.log('=== flat ===');
arr = arr.flat();
console.log(arr);

console.log('=== slice (2,7) ===');
arr = arr.slice(2, 7);
console.log(arr);

console.log('=== push (100) ===');
arr.push(100);
console.log(arr);

console.log('=== shift ===');
arr.shift();
console.log(arr);

console.log('=== pop ===');
value = arr.pop();
console.log(arr, 'value = ', value);

console.log('=== to string ===');
console.log(arr.toString());

console.log('=== join by # ===');
console.log(arr.join('#'));



