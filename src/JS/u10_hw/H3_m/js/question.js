function output(ans, msg){
    /*
     * Output to the console and page.
     */
    ans.innerHTML = msg;
    console.log(msg);
}
function randomInt(min,max){
    /*
     * Get a random integer from [min, max].
     */
    return Math.floor(Math.random()*(max-min+1))+min;
};
function isPrime(n){
    /*
     * Determine whether the number n is a prime number.
     */
    if (n == 1) return false;
    if (n == 2) return true;
    for (let i=2; i<=Math.sqrt(n); i++){
        if (n%i == 0) return false;
    }
    return true;
}
function checkInputIsNotEmpty(idSegment){
    let inputs = document.querySelectorAll(`input[id*=${idSegment}]`);
    for (let i in inputs){
        if (!new RegExp(`${idSegment}-`).test(inputs[i].id)) continue;
        if (inputs[i].value === ''){
            inputs[i].classList.add("format-error");
            output(document.getElementById(`${idSegment}-ans`), "不能留空");
            return false;
        }
        else{
            inputs[i].classList.remove("format-error");
        }
    }
    return true;
}

function Q1(mode){
    if (!checkInputIsNotEmpty("Q1")) return ;
    let n1 = parseFloat(document.getElementById("Q1-n1").value),
        n2 = parseFloat(document.getElementById("Q1-n2").value),
        ans = document.getElementById("Q1-ans"),
        msg;
    msg = (mode==1) ? `${n1} x ${n2} = ${n1*n2}` : (n2!=0) ? `${n1} / ${n2} = ${Math.round(n1/n2*100)/100.0}` : "除數(n2)不可為 0";
    output(ans, msg);
}
function Q2(){
    if (!checkInputIsNotEmpty("Q2")) return ;
    let tri = [
            document.getElementById("Q2-a").value,
            document.getElementById("Q2-b").value,
            document.getElementById("Q2-c").value,
        ],
        ans = document.getElementById("Q2-ans"),
        msg = ["(1) ", "(2) ", "(3) "];
    let flag;
    tri = tri.map(x => parseFloat(x)).sort((a,b)=>{return a-b});
    console.log(tri);
    msg[0] += ((tri[0]+tri[1] > tri[2]) ? "符合" : "不符合") + "規範";
    flag = (tri[0]+tri[1] > tri[2]);
    if (flag){
        msg[1] += ((tri[0]==tri[2]) ? "是" : "不是") + "正三角形";
        msg[2] += ((tri[0]==tri[1] || tri[1]==tri[2]) ? "是" : "不是") + "等腰三角形";
    }
    else{
        msg[1] += "無法判斷";
        msg[2] += "無法判斷";
    }
    msg = msg.join("<br>");
    output(ans, msg);
}
function Q3(){
    if (!checkInputIsNotEmpty("Q3")) return ;
    let n1 = parseFloat(document.getElementById("Q3-n").value),
        ans = document.getElementById("Q3-ans"),
        msg;
    let n = n1,
        f0 = 0, 
        f1 = 1,
        fn;
    if (n1 < 0) msg = "費氏數列項數最小為 0";
    else{
        if (n1 == 0) fn = f0;
        else if (n1 == 1) fn = f1;
        else{
            while (--n){
                fn = f0 + f1;
                f0 = f1;
                f1 = fn;
            }
        }
        msg = `F(${n1}) = ${fn}`;
    }
    output(ans, msg);
}

function Q4(){
    if (!checkInputIsNotEmpty("Q4")) return ;
    let n = parseFloat(document.getElementById("Q4-n").value),
        ans = document.getElementById("Q4-ans"),
        msg;
    if (n===n && n!==(n|0)) msg = `${n} 是浮點數，無法判斷`;
    else if (n<=0) msg = `${n} 不在質數討論範圍，無法判斷`;
    else msg = n + (isPrime(n) ? " 是" : " 不是") + "質數";
    output(ans, msg);
}

function Q5(){
    if (!checkInputIsNotEmpty("Q5")) return ;
    let n = parseFloat(document.getElementById("Q5-n").value),
        ans = document.getElementById("Q5-ans"),
        msg;
    let record = [];
    for (let i=2; i<=n; i++){
        if (isPrime(i)) record.push(i);
    }
    msg = (record.length == 0) ? `找不到不大於 ${n} 的質數` : `不大於 ${n} 的質數有 : ${record.join(", ")}`;
    output(ans, msg);
}

function Q6(){
    let id = document.getElementById("Q6-id"),
        warn = document.getElementById("Q6-warn"),
        msg;
    if (id.value.length != 10){
        msg = "身分證長度必須等於 10";
        id.classList.add("format-error");
    }
    else if (!/[a-zA-Z](1|2)[0-9]{8}/.test(id.value)){
        msg = "身分證格式錯誤";
        id.classList.add("format-error");
    }
    else{
        msg = "";
        id.classList.remove("format-error");
    }
    output(warn, msg);
}

function Q7(){
    let ans = document.getElementById("Q7-ans"),
        msg;
    let text = ans.textContent;
    msg = text.slice(1) + text[0];
    output(ans, msg);
}

function Q8(){
    let ans = document.getElementById("Q8-ans"),
        msg;
    let s = "師太：「和尚、道長你們一起上吧，我趕時間。」";

    msg = `[${s.split(/[：「、，。」]/g).map(x => (x==="" ? "NaN" : x)).join(", ")}]<br>(為方便觀察，其中的 NaN 表示空字串)`;
    output(ans, msg);
}

function Q9(){
    function week(y, m, d){
        let w, C, Y, newCalendar;
        if (m==1 || m==2){
            y--;
            m += 12;
        }
        C = Math.floor(y/100);
        Y = y%100;
        newCalendar = (y>1582) || (y==1582 && m>10) || (y==1582 && m==10 && d>=15);
        if (newCalendar){
            w = Y + Math.floor(Y/4) + Math.floor(C/4) - 2*C + Math.floor(26*(m+1)/10) + d -1;
        }
        else if (y==1582 && m==10 && (d>4 && d<15)){
            return "dne";
        }
        else {
            w = Y + Math.floor(Y/4) - C + Math.floor(26*(m+1)/10) + d +4;
        }
        return ((w%7)+7)%7;
    }
    if (!checkInputIsNotEmpty("Q9")) return ;
    let date = document.getElementById("Q9-date").value.split("/").map(x => parseInt(x)),
        ans = document.getElementById("Q9-ans"),
        msg;
    let w, stdDays;
    const WEEK = ["日", "一", "二", "三", "四", "五", "六"];

    if (date.length != 3){
        output(ans, "日期格式錯誤");
        return ;
    }
    stdDays = /4|6|9|10/.test(date[1]) ? 30 : date[1]==2 ? ((!(date[0]%4) && date[0]%100) || !(date[0]%400))?29:28 : 31;
    if (date[0]<1 || (date[1]<1 || date[1]>12) || (date[2]<1 || date[2]>stdDays)){
        output(ans, `${date.join("/")} 不存在`);
        return ;
    }
    w = week(date[0], date[1], date[2]);
    msg = date.join("/") + ((w=="dne") ? " 不存在" : ` 是 星期${WEEK[w]}`);
    output(ans, msg);
}
function Q10(){
    if (!checkInputIsNotEmpty("Q10")) return ;
    let n = parseInt(document.getElementById("Q10-n").value),
        num = document.getElementById("Q10-num"),
        counter = document.getElementById("Q10-counter"),
        ans = document.getElementById("Q10-ans"),
        msg = n;
    let count = parseInt(counter.value),
        answer = (num.value==="-1") ? randomInt(0, 100) : parseInt(num.value);
    count++;
    if (n != answer){
        num.value = answer;
        counter.value = count;
        if (n > answer) msg += " 太高";
        else msg += " 太低";
    }
    else{
        msg += ` 猜對了，你猜了 ${count} 次<br>已產生新數字，可以繼續猜`;
        num.value = -1;
        counter.value = 0;
    }
    output(ans, msg);
}

function Q11(){
    if (!checkInputIsNotEmpty("Q11")) return ;
    let t_C = document.getElementById("Q11-t").value.replaceAll(/\s/g, "").split(",").filter(x => x).map(x => parseFloat(x)),
        ans = document.getElementById("Q11-ans"),
        msg = "";
    let t_F = t_C.map(x =>  9*x/5 + 32);
    for (let idx in t_C){
        msg += `${t_C[idx]} °C => ${t_F[idx]} °F<br>`;
    }
    output(ans, msg);
}

function Q12(){
    if (!checkInputIsNotEmpty("Q12")) return ;
    let f = document.getElementById("Q12-f").value,
        ans = document.getElementById("Q12-ans"),
        msg;
    msg = `${f} 的副檔名為 : ${f.split(".").slice(-1)}`;
    output(ans, msg);
}
function Q13(){
    if (!checkInputIsNotEmpty("Q13")) return ;
    let email = document.getElementById("Q13-email").value,
        ans = document.getElementById("Q13-ans"),
        msg;
    msg = email + (/^[a-z].*\@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(email) ? " 是" : " 不是") + "合格信箱";
    output(ans, msg);
}
function Q14(){
    if (!checkInputIsNotEmpty("Q14")) return ;
    let n = document.getElementById("Q14-ns").value.replaceAll(/\s/g, "").split(",").filter(x => x).map(x => parseFloat(x)),
        ans = document.getElementById("Q14-ans"),
        msg;
    let sum = 0;
    n.forEach((x) => sum += x*x);
    msg = `平方和為: ${sum}`;
    output(ans, msg);
}
function Q15(){
    let ans = document.getElementById("Q15-ans"),
        msg;
    const cities = [
          {name: 'Los Angeles', population: 3792621},
          {name: 'New York', population: 8175133},
          {name: 'Chicago', population: 2695598},
          {name: 'Houston', population: 2099451},
          {name: 'Philadelphia', population: 1526006}
    ];
    msg = "人口小於300萬的都市為 : " + cities.filter(x => x["population"]<3000000).map(x => x["name"]).join(", ");
    output(ans, msg);
}
function Q16(){
    let ans = document.getElementById("Q16-ans"),
        msg = "";
    const cities = [
          {name: 'Los Angeles', population: 3792621},
          {name: 'New York', population: 8175133},
          {name: 'Chicago', population: 2695598},
          {name: 'Houston', population: 2099451},
          {name: 'Philadelphia', population: 1526006}
    ];
    let tmp = cities.sort((a, b) => a["population"]-b["population"]);
    tmp.forEach((x) => msg += `都市: ${x["name"]}, 人口數: ${x["population"]}<br>`);
    output(ans, msg)
}
function Q17(){
    let ans = document.getElementById("Q17-ans"),
        des = document.getElementById("Q17-des");
        table = document.getElementById("Q17-g");
        msg = "";
    let grade = [["", "科目 1", "科目 2", "科目 3"]],
        tr, td, i, j, tmp,
        stuSum=[0,0,0],
        subSum=[0,0,0],
        good = {"s1":[-1, ""], "s2":[-1, ""], "s3":[-1, ""]};

    for (i=0; i<3; i++){
        tmp=[`學生 ${i+1}`];
        for (j=0; j<3; j++){
            tmp.push(randomInt(0, 100));
        }
        grade.push(tmp);
    }
    des.innerHTML = "<p>隨機產生之成績表 : </p>";
    table.innerHTML = "";
    for (i=0; i<4; i++){
        tr = document.createElement("tr");
        for (j=0; j<4; j++){
            td = document.createElement("td");
            td.textContent = grade[i][j];
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }

    for (i=1; i<4; i++){
        for (j=1; j<4; j++){
            stuSum[j-1] += grade[i][j];
            subSum[j-1] += grade[j][i]
            if (grade[i][j] > good[`s${j}`][0]){
                good[`s${j}`][0] = grade[i][j]
                good[`s${j}`][1] = grade[i][0];
            }
        }
    }
    msg += `(1) 各科平均 : ${subSum.map(x => Math.round(x/3*100)/100.0).join(", ")}<br>`;
    msg += `(2) 每人平均 : ${stuSum.map(x => Math.round(x/3*100)/100.0).join(", ")}<br>`;
    msg += `(3) 各科最高分和該學生姓名 : <br>&emsp;&emsp;科目1 : ${good['s1'][1]} / ${good['s1'][0]}分<br>&emsp;&emsp;科目2 : ${good['s2'][1]} / ${good['s2'][0]}分<br>&emsp;&emsp;科目3 : ${good['s3'][1]} / ${good['s3'][0]}分`;
    output(ans, msg);
}