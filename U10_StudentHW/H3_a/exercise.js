// Unit Functon ############################################################################################
function alertEmptyInput(str){
    alert(`Input Box is Empty! Please input the ${str}`);
}

// Exercise 1 ##############################################################################################
//普通的加減乘除，利用js提供的運算子進行運算，再利用toFixed()來控制小數的位數，由於toFixed只接受Float因此使用parseFloat將所有的輸入值轉型為小數，而非整數
function plus() {
    let form = document.querySelector(".num-operator-form");
    let num1 = parseFloat(form[0].value);
    let num2 = parseFloat(form[1].value);
    if(!num1||!num2){
        alertEmptyInput("Number");
        return; 
    }
    form[0].value = "";
    form[1].value = "";
    document.querySelector(".answer").innerHTML = (num1 + num2).toFixed(2);
};
function minus() {
    let form = document.querySelector(".num-operator-form");
    let num1 = parseFloat(form[0].value);
    let num2 = parseFloat(form[1].value);
    if(!num1||!num2){
        alertEmptyInput("Number");
        return; 
    }
    form[0].value = "";
    form[1].value = "";
    document.querySelector(".answer").innerHTML = (num1 - num2).toFixed(2);
};
function multiply() {
    let form = document.querySelector(".num-operator-form");
    let num1 = parseFloat(form[0].value);
    let num2 = parseFloat(form[1].value);
    if(!num1||!num2){
        alertEmptyInput("Number");
        return; 
    }
    form[0].value = "";
    form[1].value = "";
    document.querySelector(".answer").innerHTML = (num1 * num2).toFixed(2);
};
function divided() {
    let form = document.querySelector(".num-operator-form");
    let num1 = parseFloat(form[0].value);
    let num2 = parseFloat(form[1].value);
    if(!num1||!num2){
        alertEmptyInput("Number");
        return; 
    }
    form[0].value = "";
    form[1].value = "";
    document.querySelector(".answer").innerHTML = (num1 / num2).toFixed(2);
}

// Exercise 2 ##############################################################################################
// 根據輸入值判斷是否滿足不同種類三角形的條件，並能夠添加輸入欄位，一次性判斷多筆資料，為了提升體驗，將資料輸入量的極限限制在五筆
// 輸出對齊很麻煩...
function addTriangleInput(){
    if(document.querySelector(".triangle-checker-form").children.length>5){
        alert("The triangle input limit has been reached!");
        return;
    }
    let triangle = document.createElement("div");
    let edges = [];
    for(let i = 1; i<=3; i++){
        let edge = document.createElement("input");
        edge.type = "number";
        edge.title = `edge${i}`;
        edge.placeholder = `edge${i}`;
        edge.value = "0";
        edge.min = "0";
        edge.classList.add("small-input");
        edges.push(edge);
    }
    triangle.classList.add("flex-row");
    edges.forEach((edge)=>triangle.appendChild(edge));
    document.querySelector(".triangle-checker-form").appendChild(triangle);

    let checkBoxLayer = document.createElement("div");
    let contentWidth = [63.9,82.75,46.125];
    for(let i = 0; i < 3; i++){
        let checkBox = document.createElement("div");
        checkBox.classList.add("psuedo-small-input-style");
        checkBox.style = `width:${contentWidth[i]}px !important;`;
        checkBoxLayer.appendChild(checkBox);
    }
    checkBoxLayer.classList.add("flex-row");
    document.querySelector(".triangleCheck").appendChild(checkBoxLayer);
    
}
function triangleChecker(){
    let form = document.querySelector(".triangle-checker-form").children;
    let checker = document.querySelector(".triangleCheck").children;
    for(let i = 1; i < form.length; i++){
        let edges = Array.from(form[i].children, (x) => parseInt(x.value)).sort((a, b) => a - b);
        let isTriangle = edges[0] + edges[1] > edges[2];
        let isEquilateral = edges[0] === edges[1] && edges[1] === edges[2];
        let isRight = edges[0] * edges[0] + edges[1] * edges[1] === edges[2] * edges[2];
        if(edges[0]<=0||edges[1]<=0||edges[2]<=0){
            isTriangle = isEquilateral = isRight = false;
        }
        let checkBoxs = checker[i].children;
        checkBoxs[0].innerHTML = isTriangle;
        checkBoxs[1].innerHTML = isEquilateral;
        checkBoxs[2].innerHTML = isRight;
    }
}
addTriangleInput()

// Exercise 3 ##############################################################################################
// 標準的利用迴圈和三變數來計算fibonacci的方法，並未使用矩陣計算來縮短時間
function getFibonacci() {
    let n = parseInt(document.querySelector("input[title=nOfFibonacci").value);
    if(!n){
        alertEmptyInput("Number");
        return; 
    }
    if(n<=0){
        alert("Number you input violate the regulation!");
        return;
    }
    let a = 0, b = 1, c;
    for (let i = 1; i < n; i++) {
        c = a + b, a = b, b = c;
    }
    document.querySelector(".nFibonacci").innerHTML = b;
}

// Exercise 4 ##############################################################################################
// 也是單純利用迴圈來判斷是否為值數，迴圈的執行次數為輸入值開根號在減去0,1的狀況
function primeCheck() {
    let input = parseInt(document.querySelector("input[title=primeNum]").value);
    if(!input){
        alertEmptyInput("Number");
        return; 
    }
    let result = `${input} is  prime number!`;
    for (let i = 2; i * i <= input; i++) {
        if (input % i === 0) {
            result = `${input} is not prime number!`;
            break;
        }
    }
    if(input<0){
        result = `${input} is not prime number!`;
    }
    document.querySelector(".primeCheckResult").innerHTML = result;
}

// Exercise 5 ##############################################################################################
// 利用質數篩法的方式來取得小於輸入值的所有質數，並利用forEach片歷，輸出到畫面上
function showPrime() {
    let input = parseInt(document.querySelector("input[title=primeLimit]").value);
    if(!input){
        alertEmptyInput("Number");
        return; 
    }
    if(input<0){
        document.querySelector(".primeList").innerHTML = "Can't found negative prime Number!";
        return;
    }
    let primeTable = new Array(input);
    for (let i = 2; i < input; i++) {
        for (let j = 2; i * j < input; j++) {
            if (!primeTable[i * j]) primeTable[i * j] = 1;
        }
    }
    let primeList = [];
    for (let i = 2; i < input; i++) {
        if (!primeTable[i]) primeList.push(i);
    }
    primeList.forEach((prime,i)=>document.querySelector(".primeList").innerHTML += prime+(i+1<primeList.length?",  ":""));
}


// Exercise 6 ##############################################################################################
// 透過Regex來判斷輸入的ID和Email是否符合格式，在這邊使用/(\.[a-z]+)?$/來確認Email結尾的.是否有配合自串
// 在輸入完成並離開輸入欄時，會有icon即時表示內容是否符合格式
function checkId() {
    let fid = document.querySelector("input[title=id]").value;
    if (/^[A-Z][1|2]\d{8}/.test(fid) === false) {
        document.querySelector(".idCheckMark").innerHTML = "❌";
    } else {
        document.querySelector(".idCheckMark").innerHTML = "✅";
    }
}
function checkEmail() {
    let email = document.querySelector("input[title=email]").value;
    if (/[A-Za-z0-9]+[@][a-z]+(\.[a-z]+)?(\.[a-z]+)?$/.test(email) === false) {
        document.querySelector(".emailCheckMark").innerHTML = "❌";
    } else {
        document.querySelector(".emailCheckMark").innerHTML = "✅";
    }
}
function checkIdAndEmail() {
    let fid = document.querySelector("input[title=id]").value;
    let email = document.querySelector("input[title=email]").value;
    if (!fid && !email) {
        alert("The input box is empty!")
    } else if (/^[A-Z][1|2]\d{8}/.test(fid) === false || /[A-Za-z0-9]+[@][a-z]+(\.[a-z]+)?(\.[a-z]+)?$/.test(email) === false) {
        alert("The input ID/Email format is wrong!");
    } else {
        alert("The input ID and Email format is correctly!");
    }
}

// Exercise 7 ##############################################################################################
// 就是利用substring對自串進行分割，在組合
let str = "Nehcled";
function cycle() {
    str = str.substring(1) + str[0];
    document.querySelector(".cycle-string").innerHTML = str;
}

// Exercise 8 ##############################################################################################
// 利用split & Regex將常見的標當作分割點，然後用forEach輸出分割後的自串
function splitSentence() {
    let sentence = document.querySelector("input[title=sentence").value;
    let subSentence = sentence.split(/[|「|」|：|︰|〜|，|；|？|！|。|、|\s|\.|,|;]+/);
    if (!subSentence[subSentence.length - 1]) subSentence.splice(subSentence.length - 1);
    subSentence.forEach((substr,i)=>document.querySelector(".subSentence").innerHTML+= substr+(i+1<subSentence.length?",  ":""));
}

// Exercise 9 ##############################################################################################
// 1970/1/1為星期四，用for迴圈開始累加天數，並判斷閏年，最後在mod一周的天數，並對應到陣列中的字串
function checkLeapYear(year) {
    if (!(year % 400) || (year % 100 && !(year % 4))) return true;
    return false;
}
function checkDayOfWeek() {
    let dayOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let input = document.querySelector("input[title=date]").value;
    let dateSet = input.split(/[\/|,|\.]/).map((x) => parseInt(x));
    if(!dateSet[0]){
        alertEmptyInput("Date")
        return; 
    }
    let sumOfDay = 4;//1970/1/1 is Thursday

    if (dateSet[0] < 1970 || (dateSet[0] > 2038 && date[1] > 1 && date[2] > 19) || dateSet[1] < 1 || dateSet[1] > 12 || dateSet[2] < 1 || (dateSet[1]!==2&&dateSet[2] > dayOfMonth[dateSet[1]])) {
        alert("Time you input violate the regulation! Please input date between 1970/1/1 ~ 2038/1/19");
        return;
    }
    if ((!checkLeapYear(dateSet[0]) && dateSet[1]===2&&dateSet[2] > 28)||(dateSet[1]===2&&dateSet[2]>29)) {
        alert("Time you input violate the regulation!  Please input date between 1970/1/1 ~ 2038/1/19");
        return;
    }

    for (let year = 1970; year < dateSet[0]; year++) {
        sumOfDay += checkLeapYear(year) ? 366 : 365;
    }
    for (let month = 1; month < dateSet[1]; month++) {
        if(checkLeapYear(dateSet[0])&&month===2){
            sumOfDay++;
        }
        sumOfDay += dayOfMonth[month];
    }
    for (let day = 1; day < dateSet[2]; day++) {
        sumOfDay++;
    }
    document.querySelector(".dateCheckResult").innerHTML = `The ${input} is ${weeks[sumOfDay % 7]}`;
}

// Exercise 10 ##############################################################################################
// 就是猜數字，點擊start按鈕，利用Math.random()隨機生成1~100的數字
// 當按下guess時會判斷輸入內容大於還是小於目標，並用自串提示
// 按下restart重製介面
// 利用display: invinsible來隱藏其他元素
let randomNum = 0;
let guessTime = 0;
function startGuessNumberGame(){
    document.querySelectorAll(".guessNumber button")[0].classList.add("invisible");
    document.querySelector(".guessNumberGameInterface").classList.remove("invisible");
    document.querySelectorAll(".guessNumber button")[2].classList.remove("invisible");
    document.querySelector(".guessResult").classList.remove("invisible");
    randomNum = (Math.floor(Math.random()*100)+1)%101;
    guessTime = 0;
} 
function guessNumber(){
    let guessNum = parseInt(document.querySelector("input[title=guessNumberInput]").value);
    guessTime++;
    if(guessNum===randomNum){
        alert(`Guess correctly! The answer is ${randomNum}! You guessed ${guessTime} ${guessTime>1?"times":"time"}.`);
        document.querySelector(".guessNumberGameInterface").classList.add("invisible");
        document.querySelector(".guessResult").classList.add("invisible");
    }else if(guessNum>randomNum){
        document.querySelector(".guessResult").innerHTML = "Guess lower!";
    }else if(guessNum<randomNum){
        document.querySelector(".guessResult").innerHTML = "Guess higher!";
    }
    
}
function restartGuessNumberGame(){
    document.querySelectorAll(".guessNumber button")[0].classList.remove("invisible");
    document.querySelectorAll(".guessNumber button")[2].classList.add("invisible");
    document.querySelector(".guessNumberGameInterface").classList.add("invisible");
    document.querySelector(".guessResult").classList.add("invisible");
    randomNum=0;
    guessTime = 0;
}

// Exercise 11 ##############################################################################################
// 轉換溫度，可選擇華氏轉攝氏或攝氏轉華氏
let cfMode = 0;
function changeCf(){
    if(cfMode){
        document.querySelector(".fToC").classList.add("invisible");
        document.querySelector(".cToF").classList.remove("invisible");
    }else{
        document.querySelector(".cToF").classList.add("invisible");
        document.querySelector(".fToC").classList.remove("invisible");
    }
    cfMode = !cfMode;
}
function addTemperatureInput(){
    if(document.querySelector(".temperatures").children.length===20){
        alert("The temperature input limit has been reached!")
        return;
    }
    let newTemperature = document.createElement("input");
    newTemperature.type = "number";
    newTemperature.classList.add("small-input");
    document.querySelector(".temperatures").appendChild(newTemperature);
}
cfTransform = () =>{
    let inputs = Array.from(document.querySelector(".temperatures").children).map((temperature)=>parseFloat(temperature.value)).filter((temperature)=>temperature);
    let outputs;
    if(cfMode){
        outputs = inputs.map((temperature)=>((temperature-32)*5/9).toFixed(1));
    }else{
        outputs = inputs.map((temperature)=>(temperature*9/5+32).toFixed(1));
    }
    document.querySelector(".cfTransformResult").innerHTML = "";
    outputs.forEach((temperature,i)=>document.querySelector(".cfTransformResult").innerHTML+= temperature+(i+1<outputs.length?",  ":""));
}

// Exercise 12 ##############################################################################################
// 利用match()和Regex找到最後符合副檔名的字串並顯示
function getFilenameExtension(){
    let extension = document.querySelector("input[title=filename]").value.match(/(\.[a-z]+)$/)?.[0];
    if(document.querySelector("input[title=filename]").value===""){
        alertEmptyInput("Filename");
        return; 
    }
    if(!extension){
        alert("The input filename format is wrong!");
        return;
    }
    document.querySelector(".filenameExtension").innerHTML=extension;
}

// Exercise 13 ##############################################################################################
// 同練習6的判斷方法
function checkEmailFormat() {
    let email = document.querySelector("input[title=email2]").value;
    if(email===""){
        alertEmptyInput("Email");
        return;  
    }
    if (/[A-Za-z0-9]+[@][a-z]+(\.[a-z]+)?(\.[a-z]+)?$/.test(email) === false) {
        alert("The input Email format is wrong!");
    } else {
        alert("The input Email format is correctly!");
    }
}

// Exercise 14 ##############################################################################################
// 可新增欄位，利用reduce累加陣列中元素的平方數並輸出
function addSumOfSquaresInput(){
    if(document.querySelector(".sumOfSquaresInputs").children.length===20){
        alert("The number input limit has been reached!")
        return;
    }
    let newNumber = document.createElement("input");
    newNumber.type = "number";
    newNumber.classList.add("small-input");
    document.querySelector(".sumOfSquaresInputs").appendChild(newNumber);
}
function getSumofSquaresInput(){
    let inputs = Array.from(document.querySelector(".sumOfSquaresInputs").children).map((number)=>parseInt(number.value)).filter((number)=>number);
    let outputs = inputs.map((number)=>number*number);
    document.querySelector(".sumOfSquaresResult").innerHTML = outputs.reduce((num1,num2)=>num1+num2);
}

// Exercise 15 & 16 ##############################################################################################
// 就是利用filter,sort,map處裡並輸出
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
document.querySelector(".cities").innerHTML = JSON.stringify(cities,null,2);
function filterPopulation(){
    let filterCities = cities.filter((city)=>city.population<3000000);
    document.querySelector(".filterCities").innerHTML = JSON.stringify(filterCities,null,2);
}
function sortFilterPopulation(){
    document.querySelector(".filterCitiesSort").innerHTML = cities.filter((city)=>city.population<3000000)
                                                                  .sort((cityA,cityB)=>cityA.population-cityB.population)
                                                                  .map((city)=>`<br>City name: ${city.name}, Population: ${city.population}`);
}


// Exercise 17 ##############################################################################################
// 隨機選擇三個課程名稱(來自MIT Computer Science & Information Engineering之必選修課程清單)和名子(來自網路統計最受歡迎的10個名子)
// 利用Math.random()和二維陣列隨機生成分數
// 用for迴圈判斷最高分者和平均分數
// 點擊refresh會刷新內容
function calculateGrades(){
    let grades = [];
    for(let i = 0;i < 3; i++){
        let personalGrades = [];
        for(let j = 0; j < 3; j++){
            personalGrades.push(Math.floor(Math.random()*101));
        }
        grades.push(personalGrades);
    }
    
    let subjectTable = document.querySelector(".subject").children;
    let subjectTable2 = document.querySelector(".subject2").children;
    let randomSubjects = [];
    for(let i = 0; i < 3; i++){
        let rand = Math.floor(Math.random()*(subjects.length-i));
        let subject = subjects[rand];
        let hold = subjects[subjects.length-i-1];
        subjects[subjects.length-i-1] = subject;
        subjects[rand] = hold;
        randomSubjects.push(subject);
        subjectTable[i+1].innerHTML = subject;
        subjectTable2[i+1].innerHTML = subject;
    }

    let studentTable = document.querySelectorAll("tr[class^=student]");
    let randomStudents = [];
    for(let i = 0; i < 3; i++){
        let studentData = studentTable[i].children;
        let rand = Math.floor(Math.random()*(students.length-i));
        let student = students[rand];
        let hold = students[students.length-i-1];
        students[students.length-i-1] = student;
        students[rand] = hold;
        randomStudents.push(student);
        studentData[0].innerHTML = student;
        studentData[1].innerHTML = grades[i][0];
        studentData[2].innerHTML = grades[i][1];
        studentData[3].innerHTML = grades[i][2];
        studentData[4].innerHTML = (grades[i].reduce((score1,score2)=>score1+score2)/3).toFixed(2);
    }

    let scoreAverage = document.querySelector(".scoreAverage").children;
    let highScoreStudent = document.querySelector(".highScoreStudent").children;
    for(let i = 0; i < 3; i++){
        let average = 0;
        let studentIndex = 0;
        for(let j = 0; j < 3; j++){
            average+=grades[i][j];
            studentIndex = grades[j][i]>grades[studentIndex][i]?j:studentIndex;        
        }
        scoreAverage[i+1].innerHTML = (average/3).toFixed(2);
        highScoreStudent[i+1].innerHTML = randomStudents[studentIndex];
    }
}

calculateGrades()