/**
 * 針對一個儲存成績的二維陣列，進行處理，計算
 * (1) 每個學生的平均分數
 * (2) 各科最高分數，獲得的是哪學生？
 */

let students = [    // 四個學生的成績
    [98, 95, 98],   // 學生 a0 的三科成績
    [60, 22, 12],   // 學生 a1 的三科成績
    [70, 55, 72],   // 學生 a2 的三科成績
    [99, 99, 99]    // 學生 a3 的三科成績
];
let names = ['Mary', 'John', 'Allen', 'Nick'];      // 學生姓名
let subjects = "Math English Physical".split(" ");  // 科目名稱

// 找出各科最高的分數，是誰的分數
function hightest() {
    let st_len = students.length;
    let sj_len = students[0].length;
    for (let j = 0; j < sj_len; j++) { //for each subject
        console.log("Highest score of " + subjects[j]);
        let max_index = 0;
        let max = students[max_index][j];
        for (let i = 0; i < st_len; i++) {
            if (students[i][j] > max) {
                max = students[i][j];
                max_index = i;
            }
        }
        console.log(max.toString() + " by " + names[max_index]);
    }
}

// 每位學生各科的平均
function average(students) {
    let st_av = []; // 每位學生的平均的陣列
    for (let st of students) {
        sum = 0;
        for (let subj of st) {
            sum += subj;
        }
        st_av.push(Math.round(sum / st.length, 2));
    }
    return st_av;
}

hightest();
console.log(names, '相對平均分數：', average(students));    // 四個學生的各科成績平均