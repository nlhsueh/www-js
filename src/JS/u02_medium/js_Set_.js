
s = new Set([12, 13, 34, 45]);
v = s.values();
console.log(v);

console.log('=== No duplicates in set ===');
s.? (100);
s.? (12);
console.log(s);

console.log('=== For each ===');
s.forEach(element => {
    console.log(element);
});

console.log('=== Using .values ===');
sum = 0;
for (entry of s.values()) {
    sum += entry;
}
console.log('sum is: ', sum);
