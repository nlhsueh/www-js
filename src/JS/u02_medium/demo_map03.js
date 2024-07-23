
const student = {
    101: "john",
    102: "Mary",
    103: "Alice",
};

const teacher = new Map();
teacher.set("t001", 'Nick');
teacher.set("t002", 'Jie');
teacher.set("t003", 'Jonathan');

function sayHi() {
    msg = "";
    teacher.forEach(function (x) {
        msg += `${x}-`;
    });
    document.getElementById("hi").innerHTML = msg;

    msg = "";
    for ([key, value] of teacher.entries()) {
        msg += `teacher ${key} is ${value}<br>`;
    }
    document.getElementById("hi2").innerHTML = msg;

    msg = "";
    for (p in student) {
        msg += `student ${p} is ${student[p]}<br>`;
    }
    document.getElementById("hi3").innerHTML = msg;
}