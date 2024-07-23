let a = [
    [98, 95, 98],
    [89, 22, 99],
    [70, 55, 72]
];
let names = ['Mary', 'John', 'Allen'];
let subjects = "Math English Physical".split(" ");

console.log(average(a));

function hightest() {
    let st_len = a.length;
    let sj_len = a[0].length;
    for (let j = 0; j < sj_len; j++) { //for each subject
        console.log("Highest score of " + subjects[j]);
        let max_index = 0;
        let max = a[max_index][j];
        for (let i = 0; i < st_len; i++) {
            if (a[i][j] > max) {
                max = a[i][j];
                max_index = i;
            }
        }
        console.log(max.toString() + " by " + names[max_index]);
    }
}

function average(a) {
    let st_av = [];
    for (let gg of a) {
        sum = 0;
        for (let g of gg) {
            sum += g;
        }
        st_av.push(Math.round(sum / gg.length, 2));
    }
    return st_av;
}

hightest();