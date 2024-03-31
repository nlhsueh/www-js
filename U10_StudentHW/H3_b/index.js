
//Q1
function multiply() {
    var a = document.getElementById('first_number').value;
    var b = document.getElementById('second_number').value;

    if (isNaN(a) || isNaN(b)) {
        alert('不是數字喔');
    } else if (a == "" || b == "") {
        alert('No Input')
    } else {
        document.getElementById('triangle_multiply').innerHTML = (a * b);
    }
}

function divide() {
    var a = document.getElementById('first_number').value;
    var b = document.getElementById('second_number').value;

    if (isNaN(a) || isNaN(b)) {
        alert('不是數字喔');
    } else if (a == "" || b == "") {
        alert('No Input')
    } else {
        document.getElementById('triangle_divide').innerHTML = (a / b).toFixed(2);
    }
}

//Q2
function triangle() {
    var a = document.getElementById('q2_1').value;
    var b = document.getElementById('q2_2').value;
    var c = document.getElementById('q2_3').value;
    var length = 0.0;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('不是數字喔');
    } else if (a == "" || b == "" || c == "") {
        alert('No Input');
    } else {
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        length = (a + b + c) / 2;
        document.getElementById('triangle_area').innerHTML = (Math.pow(length * (length - a) * (length - b) * (length - c), 0.5)).toFixed(2);
        if (a + b > c && a + c > b && b + c > a) {
            if (a == b && b == c && a == c) {
                console.log('正三角形');
                document.getElementById('triangle').innerHTML = "正三角形";
            } else {
                if (a == b || b == c || c == a) {
                    console.log('等腰三角形');
                    document.getElementById('triangle').innerHTML = "等腰三角形";
                }
            }
        } else {
            console.log('不是三角形');
            document.getElementById('triangle').innerHTML = "不是三角形";
        }
    }
}

//fibonacci
function q3() {
    var number = document.getElementById('q3_1').value
    var answer = 0;
    if (isNaN(number)) {
        alert('不是數字喔');
    } else if (number == "") {
        alert('No Input')
    } else {
        number = parseInt(number);
        answer = fibonacci(parseInt(number));
        document.getElementById('fibonacci').innerHTML = answer;

        function fibonacci(num) {
            if (num <= 2) {
                if (num == 0) {
                    return 0;
                } else {
                    return 1;
                }
            } else {
                return fibonacci(num - 1) + fibonacci(num - 2);
            }
        }
    }
}

//質數 1
function q4() {
    var number = document.getElementById('q4_1').value;
    if (isNaN(number)) {
        alert('不是數字喔');
    } else if (number == "") {
        alert('No Input');
    } else {
        number = parseInt(number);
        if (isPrime(number)) {
            document.getElementById('prime1').innerHTML = "質數"
            console.log('質數');
        }
        else {
            document.getElementById('prime1').innerHTML = "不是質數"
            console.log('不是質數');
        }
    }
}

function isPrime(x) {
    for (var i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

//質數2 
function q5() {
    var number = document.getElementById('q5_1').value;
    var array = [];
    if (isNaN(number)) {
        alert('不是數字喔')
    } else if (number == "") {
        alert('No Input');
    } else {
        number = parseInt(number);
        for (var i = 2; i <= number; i++) {
            if (isPrime(i)) {
                array.push(i);
                console.log(i);
            }
        }
        document.getElementById('prime2').innerHTML = array;
    }
}

function q6() {
    var ssn = document.getElementById("ssn").value;
    var email = document.getElementById("email").value;
    if (ssn.length != 10) {
        alert("身分證長度必須等於 10");
    }
    else if (!/[a-zA-Z](1|2)[0-9]{8}/.test(ssn)) {
        alert("身分證格式錯誤");
    }
    else {
        alert("correct");
        document.getElementById("ssn_result").innerHTML = "正確";
    }
}

function q7() {
    var s = document.getElementById("circle-string").value;

    s = s.slice(1) + s.slice(0, 1);
    console.log(s);
    document.getElementById("circle-string").value = s;
}

//去除標點
function q8() {
    let string = "師太：「和尚、道長你們一起上吧，我趕時間。」";
    var find = string.split(/[，：「。」、？！＆＃＾％＊（～＠）]/);
    for (let i = 0; i < find.length; i++) {
        if (find[i] == "") {
            find.splice(i, 1);
            i--;
        }
    }
    document.getElementById('remove_symbol').innerHTML = find;
    console.log(find);
}

//guess number
var answer = parseInt(Math.random() * 100 + 1);
var count = 0;
function q10() {
    var guess = document.getElementById('q10_1').value;
    if (isNaN(guess)) {
        alert('不是數字喔');
    } else if (guess == "") {
        alert('No Input');
    } else {
        guess = parseInt(guess);
        count++;
        if (answer == guess) {
            document.getElementById('guess_number').innerHTML = "猜中了，新遊戲。"
            console.log('答對了');
            console.log('count:' + count);
            console.log('new game');
            count = 0;
            generate_answer();
        } else if (answer > guess) {
            console.log('guess:' + guess + ' 太小');
            document.getElementById('guess_number').innerHTML = "太小"
        } else {
            console.log('guess:' + guess + ' 太大');
            document.getElementById('guess_number').innerHTML = "太大"
        }
        function generate_answer() {
            answer = parseInt(Math.random() * 100 + 1);
        }
    }
}

//temperature
let celsius = [0, 1, 3, 7, 6, 10, 20, 40, 30, 28, 27, 25, 15, 16, 18, 19, 29];
function q11() {
    var fahrenheit = celsius.map(x => x * 9 / 5 + 32);
    console.log(fahrenheit);
    document.getElementById('transform_temperature').innerHTML = fahrenheit;
}

function add_temperature() {
    let add = document.getElementById('temperature').value;
    if (isNaN(add)) {
        alert('不是數字喔');
    } else if (add == "") {
        alert('No Input');
    } else {
        celsius.push(add);
        document.getElementById('temperature').value = "";
    }
}

//副檔名
function q12() {
    let s = document.getElementById('q12').value;
    if (s == "") {
        alert('No Input');
    } else {
        document.getElementById('file').innerHTML = s.split('.').pop();
    }
}

/*平方和*/
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function q14() {
    let sum = 0;
    document.getElementById('square').innerHTML = array;
    array.forEach(function (value) {
        sum += value * value;
    })
    document.getElementById('square_sum').innerHTML = sum;
}

function add_number() {
    let number = document.getElementById('add_number').value;

    if (isNaN(number)) {
        alert('不是數字喔');
    } else if (number == "") {
        alert('No Input');
    } else {
        array.push(number);
        document.getElementById('add_number').value = "";
    }
    document.getElementById('square').innerHTML = array;
}

function q15() {
    let cities = [
        { name: 'Los Angeles', population: 3792621 },
        { name: 'New York', population: 8175133 },
        { name: 'Chicago', population: 2695598 },
        { name: 'Houston', population: 2099451 },
        { name: 'Philadelphia', population: 1526006 }
    ];

    var r = cities.filter(x => x.population > 3000000);
    var city3 = [];
    r.forEach(c => city3.push(c.name));
    console.log(city3);
    document.getElementById("q15_res").innerHTML = city3.join(", ");
}

function q16() {
    let cities = [
        { name: 'Los Angeles', population: 3792621 },
        { name: 'New York', population: 8175133 },
        { name: 'Chicago', population: 2695598 },
        { name: 'Houston', population: 2099451 },
        { name: 'Philadelphia', population: 1526006 }
    ];

    var r = cities.filter(x => x.population > 3000000);
    r = r.sort((c1, c2) => c1.population - c2.population);
    r = r.map(c => c.name + ", " + c.population);
    document.getElementById("q16_res").innerHTML = r.join("<br>");
}