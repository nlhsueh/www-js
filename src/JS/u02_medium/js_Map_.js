
const student = {
    101: "john",                // 101 is attribute, john is value
    102: "Mary",
    103: "Alice",
}

const teacher = new Map();
teacher.? ("t001", 'Nick');    // t001 is key, nick is value
teacher.? ("t002", 'Jie');
teacher.? ("t003", 'Jonathan');

console.log('Object attribute and their values: ');
for (p ? student) {
    console.log(`  Student ${p} is ${student[p]}`);
}

console.log('Values inside a Map collection object');
teacher.forEach(function (value) {
    console.log(`  Teacher ${value}`);
});

console.log('Keys and Values inside a Map collection object');
teacher.forEach(function (?, ?) {
    console.log(`  Teacher ${key} is ${value}`);
});

console.log('Map.entries can get the [key, value]');
msg = "";
for ([key, value] of teacher.? ()) {
    console.log(`  Teacher ${key} is ${value}`);
}

console.log('Map.has() can check "key"');
if (teacher.? ('t001')) {
    console.log('  The Map has the key t01');
}
else console.log('  The Map does not have the key t01');

teacher.? ("t001", 'Anna');
console.log('Set same key will do overriding:');
teacher.? (x => console.log(`  Teacher ${x}`));
