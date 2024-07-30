
console.log("Students is an array of objects");
const students = [
    { name: "john", tall: 178 },
    { name: "nick", tall: 172 },
    { name: "mary", tall: 164 }
];
console.log(students);

console.log('=== For of and for in ===');
for (let st of students) {
    for (let attr in st) {
        console.log(attr, ":", ?);
    }
}