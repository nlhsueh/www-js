
function splitToArray() {
    let s = "eng:30;math:90;phy:100";
    let token = s.split(";");
    let r = [];
    let i = 0;
    token.forEach(element => {
        let subject = element.split(":")[0];
        let g = parseInt(element.split(":")[1]);

        r[i++] = [subject, g];
        // or r.push([subject, g];)
    });

    console.log('== Split to 2D array ==');
    console.log(r);
}

function splitToObjectArray() {
    let s = "eng:30;math:90;phy:100";
    let token = s.split(";");
    let r = [];
    token.forEach(element => {
        let subject = element.split(":")[0];
        let g = parseInt(element.split(":")[1]);
        let student = {};
        student.sub = subject;
        student.grade = g;
        r.push(student);
    });
    console.log('== Split to object array ==');
    console.log(r);
}

splitToArray();
splitToObjectArray();