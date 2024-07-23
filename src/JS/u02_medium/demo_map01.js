const student = {
    101: "john",
    102: "Mary",
    103: "Alice",
}

const teacher = new Map();
teacher.set("t001", 'Nick');
teacher.set("t002", 'Jie');
teacher.set("t003", 'Jonathan');

function sayHi() {
    msg = "";
    teacher.forEach(function (value, key) {
        msg += `teacher ${key} is ${value}<br>`;
    });
    console.log(msg);

    msg = "";
    for ([key, value] of teacher.entries()) {
        msg += `teacher ${key} is ${value}<br>`;
    }
    console.log(msg);

    msg = "";
    for (p in student) {
        msg += `student ${p} is ${student[p]}<br>`;
    }
    console.log(msg);
}