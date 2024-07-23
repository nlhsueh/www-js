
const grades = [12, 50, 99, 22, 70, 1];
const subjects = ["eng", "phy", "math", "chemistry"];
const students = [
    { name: "john", tall: 178 },
    { name: "nick", tall: 172 },
    { name: "mary", tall: 164 }
];

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

function show() {
    // number sorting
    grades.sort(function (a, b) { return a - b; });

    // string sorting
    subjects.sort(function (a, b) {
        return (a.charCodeAt(0) - b.charCodeAt(0));
    })

    // object sorting
    students.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    })

    console.log(grades);
    console.log(subjects);
    console.log(studentString(students));
}

function studentString(students) {
    let s = "";
    for (let st of students) {
        for (let t in st) {
            s += st[t];
        }
        s += ", "
    }
    return s;
}

show();