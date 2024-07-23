teachers = new Map();
teachers.set('t01', 'Albert');
teachers.set('t02', 'Nick');
t_name = teachers.get('t01');

const teacher = new Map();
teacher.set("t001", 'Nick');
teacher.set("t002", 'Jie');
teacher.set("t003", 'Jonathan');

if (teachers.has('t01')) {
    window.alert('t01 repeat')
}
for ([key, value] of teacher.entries()) {

}