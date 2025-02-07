
console.log('== 數字的排序 ==');
let grades = [12, 50, 99, 22, 70, 1];
console.log('遞增排序：', grades.sort());
grades.sort((a, b) => b - a);
console.log('遞減排序：', grades);
// ? '遞增排序：'


console.log('== 字串的排序 ==');
let subjects = ["eng", "phy", "math", "chemistry"];
subjects.sort();
console.log('遞增排序：', subjects);

subjects.sort((a, b) => b.localeCompare(a));
console.log('遞減排序：', subjects);


console.log('== 物件的排序 ==');
const students = [
    { name: "john", tall: 178 },
    { name: "nick", tall: 172 },
    { name: "mary", tall: 164 }
];

students.sort((a, b) => a.name.localeCompare(b));
console.log('依據姓名排序：', students);

// ? 依據身高排序：