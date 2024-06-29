
###### tags: `Web`

# Javascript

:::success
學習重點
* 了解 JS 能做什麼
* 了解 JS 與 HTML 的基礎整合應用
* 了解並應用 JS 基本的程式語法，包含
* 了解陣列、物件、類別的差異與應用
* 了解函式及其各種寫法
* 了解 JS 與 HTML 的進階應用 - DOM 物件操作
:::

:point_right: [JS Intro](https://docs.google.com/presentation/d/1JMaa9aSBGomS85OtSDdcQZlwuajNgdmKFtrb3WR-nSI/edit?usp=sharing)
:point_right: [W3school- javascript](
https://www.w3schools.com/js/default.asp)

## 3.1 基礎

#### JS 能做什麼？
* JavaScript 可以改變 HTML 內容
* JavaScript 可以更改 HTML 屬性值
* JavaScript 可以更改 HTML 樣式 (CSS)
* JavaScript 可以隱藏 HTML 元素
* JavaScript 可以顯示 HTML 元素


#### JS 與 HTML

HTML 裏面
```javascript=
<head>
   <script>
       function myFunction() {
 	    ...
 }
   </script>
</head>
<body>
   <h2>Demo JavaScript in Head</h2>

   <p id="demo">A Paragraph</p>
   <button type="button" onclick="myFunction()">Try it</button>

</body>

```

#### HTML 外部引用 JS 

```javascript=
<script src="myScript.js"></script>
```

> 輸出

```javascript=
innerHTML         // 修改 HTML 元件內容 (常用)
document.write()  // 輸出 HTML 文件 (通常測試用)
window.alert()    // 跳出來的警訊
console.log()     // 寫到瀏覽器的 console (debug用)
````

### [變數](https://www.w3schools.com/js/js_variables.asp)

在 JavaScript 中，您可以使用以下方式來宣告變數：

> 使用 `var` 關鍵字（ES5 之前）
```javascript
var x = 10;
```

> 使用 `let` 關鍵字（推薦，ES6+）
```javascript
let y = 20;
```

> 使用 `const` 關鍵字（用於宣告常數）
```javascript
const PI = 3.14;
```

> 變數命名規則：

1. 變數名稱必須以字母、底線（_）或美元符號（$）開頭。
2. 變數名稱可以包含字母、數字、底線和美元符號。
3. 變數名稱區分大小寫，例如 `myVar` 和 `MyVar` 是不同的變數。
4. 變數名稱不應該使用 JavaScript 保留字或關鍵字，例如 `let`、`const`、`var` 等。
5. 命名慣例通常是使用駝峰命名法（camelCase），例如 `myVariableName`。
6. 變數名稱應該具有描述性，以便他人閱讀程式碼時易於理解。

> 正確的變數命名範例：

```javascript
let firstName = "John";
let lastName = "Doe";
let userAge = 30;
let totalAmount = 100.50;
```

> 不良的變數命名範例：

```javascript
let x1 = 10; // 不具描述性的名稱
let $value = 20; // 使用美元符號開頭，通常應保留給程式庫使用
let 123abc = "Hello"; // 變數名稱不能以數字開頭
let var = 5; // 使用 JavaScript 保留字作為變數名稱
```

遵循這些變數命名規則和慣例將有助於編寫更清晰、易讀且易於維護的程式碼。

#### 常數
宣告 const 就一定要給值，而且不能在變更

```javascript=
const PI = 3.141592653589793;
PI = 3.14; //ERROR
```

正確說法：固定參考 (constant reference)
可改變 物件/陣列 內的元素值

```javascript=
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";         //OK
cars.push("Audi");          //OK
cars = ["Toyota", "Volvo"]; //ERROR

const car = { model: "500", color: "white" };
car.color = "red";          //OK
```

### [運算元](https://www.w3schools.com/js/js_operators.asp)

以下是針對 JavaScript 中的各種 operator 的介紹，以 markdown 表格的方式呈現：

| Operator | 描述             | 範例                 |
|----------|------------------|----------------------|
| `+`      | 加法             | `a + b` 返回 `a` 和 `b` 的和 |
| `-`      | 減法             | `a - b` 返回 `a` 減去 `b` 的差 |
| `*`      | 乘法             | `a * b` 返回 `a` 和 `b` 的乘積 |
| `/`      | 除法             | `a / b` 返回 `a` 除以 `b` 的商 |
| `%`      | 取餘數           | `a % b` 返回 `a` 除以 `b` 的餘數 |
| `++`     | 遞增             | `a++` 或 `++a` 將 `a` 的值增加 1 |
| `--`     | 遞減             | `a--` 或 `--a` 將 `a` 的值減少 1 |
| `=`      | 賦值             | `a = b` 將 `b` 的值賦給 `a` |
| `+=`     | 加法賦值         | `a += b` 相當於 `a = a + b` |
| `-=`     | 減法賦值         | `a -= b` 相當於 `a = a - b` |
| `*=`     | 乘法賦值         | `a *= b` 相當於 `a = a * b` |
| `/=`     | 除法賦值         | `a /= b` 相當於 `a = a / b` |
| `%=`     | 取餘數賦值       | `a %= b` 相當於 `a = a % b` |
| `==`     | 相等比較         | `a == b` 檢查 `a` 是否等於 `b` |
| `===`    | 嚴格相等比較     | `a === b` 檢查 `a` 是否等於 `b` 且類型相同 |
| `!=`     | 不相等比較       | `a != b` 檢查 `a` 是否不等於 `b` |
| `!==`    | 嚴格不相等比較   | `a !== b` 檢查 `a` 是否不等於 `b` 或類型不同 |
| `>`      | 大於比較         | `a > b` 檢查 `a` 是否大於 `b` |
| `<`      | 小於比較         | `a < b` 檢查 `a` 是否小於 `b` |
| `>=`     | 大於等於比較     | `a >= b` 檢查 `a` 是否大於或等於 `b` |
| `<=`     | 小於等於比較     | `a <= b` 檢查 `a` 是否小於或等於 `b` |
| `&&`     | 邏輯與           | `a && b` 如果 `a` 和 `b` 都為真則返回真 |
| `\|\|`   | 邏輯或           | `a \|\| b` 如果 `a` 或 `b` 任一為真則返回真 |
| `!`      | 邏輯非           | `!a` 如果 `a` 為假則返回真，否則返回假 |
| `? :`    | 條件運算符       | `condition ? expr1 : expr2` 如果 `condition` 為真則返回 `expr1`，否則返回 `expr2` |
| `typeof` | 類型運算符       | `typeof variable` 返回 `variable` 的類型 |
| `instanceof` | 實例運算符    | `object instanceof type` 檢查 `object` 是否屬於 `type` 的實例 |

這些是 JavaScript 中最常用的 operator，它們用於執行各種算術、比較和邏輯操作。


### [資料型態](https://www.w3schools.com/js/js_datatypes.asp)

JavaScript has 8 Datatypes
* String: `"abc"`   `'abc'`
* Number: `123`   `123.45`
* Boolean: `true`   `false`
* Bigint
* Undefined: 已宣告未給值
* Null: `null`
* Symbol
* Object

The Object Datatype
* An object
* An array
* A date

```javascript=
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
```


### 字串

以下是 JavaScript 中常用的字串方法，包括 `slice`：

* `slice(startIndex, endIndex)`
從字串中提取指定範圍的字符，並返回一個新的字串。`startIndex` 是起始索引（包含），`endIndex` 是結束索引（不包含）。

```javascript
let str = "Hello, world!";
let slicedStr = str.slice(0, 5); // 提取從索引 0 到索引 5 之間的字符（不包括索引 5）
console.log(slicedStr); // 輸出："Hello"
```

* `substring(startIndex, endIndex)`
與 `slice` 方法類似，但是 `substring` 不接受負數作為索引，並且當 `startIndex` 大於 `endIndex` 時，會自動交換這兩個值。

```javascript
let str = "Hello, world!";
let subStr = str.substring(7, 12); // 提取從索引 7 到索引 12 之間的字符
console.log(subStr); // 輸出："world"
```

* `substr(startIndex, length)`
從指定的起始索引開始，提取指定長度的字符。

```javascript
let str = "Hello, world!";
let substr = str.substr(7, 5); // 從索引 7 開始，提取 5 個字符
console.log(substr); // 輸出："world"
```

* `charAt(index)`
返回給定索引處的字符。

```javascript
let str = "Hello, world!";
let char = str.charAt(1); // 返回索引為 1 的字符
console.log(char); // 輸出："e"
```

* `indexOf(searchValue, startIndex)`
返回指定字符或子字串第一次出現的索引。可選的 `startIndex` 參數表示開始搜索的位置。

```javascript
let str = "Hello, world!";
let index = str.indexOf("world"); // 查找 "world" 第一次出現的位置
console.log(index); // 輸出：7
```

* `toUpperCase()` 將字串轉換為大寫。

```javascript
let str = "hello";
let upperStr = str.toUpperCase();
console.log(upperStr); // 輸出："HELLO"
```
* `toLowerCase()` 將字串轉換為小寫。

```javascript
let str = "HELLO";
let lowerStr = str.toLowerCase();
console.log(lowerStr); // 輸出："hello"
```

#### 字串轉換

> 字串轉換為數字
您可以使用兩種方法將字串轉換為數字：`parseInt()` 和 `parseFloat()`。
- `parseInt()`: 將字串轉換為整數。
- `parseFloat()`: 將字串轉換為浮點數。

```javascript
let strNumber = "123";
let intNumber = parseInt(strNumber); // 將字串轉換為整數
console.log(intNumber); // 輸出：123

let strFloat = "3.14";
let floatNumber = parseFloat(strFloat); // 將字串轉換為浮點數
console.log(floatNumber); // 輸出：3.14
```

> 數字轉換為字串

您可以使用 `toString()` 方法將數字轉換為字串。

```javascript
let number = 123;
let strNumber = number.toString(); // 將數字轉換為字串
console.log(strNumber); // 輸出："123"
```

### 練習

:::success
:basketball: 3.1.1 乘法除法 

輸入兩個輸字，選擇乘法或除法的按鈕，輸出結果 (小數點下兩位）。
:::

- 輸入：應用 form-> input 進行輸入; `document.getElementById()` 來取得值
- 輸出：應用 `console.log` 來做輸出
- 小數點下兩位：`num.toFix(2)` 


:::success
:basketball: 3.1.2 三角形面積

輸入三個邊長，判斷是否 (1) 符合三角形規範 (2) 正三角形 (3) 等腰三角形。
:::

- 輸入：應用 form-> input 進行輸入; `document.getElementById().value` 來取得值
- 進階：宣告一個二維陣列，放一群三邊長，迴圈式的讀取與判斷
- 輸出：應用 `document.getElementById()` 做輸出
- JS logic 判斷

:::success
:basketball: 3.1.3 費柏納西

輸入一個數字，求 Fibonacci 的值。
:::
- JS while 判斷
- or JS 遞迴呼叫

:::success
:basketball: 3.1.4 質數一 

輸入一個數字，回傳是否為質數。
:::
- JS 邏輯判斷
- break

:::success
:basketball: 3.1.5 質數二 

輸入一個數字，列出所有不大於此數的質數。
:::
- 雙層迴圈
- 邏輯判斷
- break

:::success
:basketball: 3.1.6 字串環

寫一個程式，每按一下 button 第一個字符就會跑到該字串的最後面。
:::
- 字串處理
- IECS FCU => ECS FCUI => CS FCUIE => …
- str.slice() or str.substr()


:::success
:basketball: 3.1.7 猜數字 

系統產生一個 1-100 的隨意整數，使用者猜，提示太高或太低。猜出後提示共猜了幾次。
:::
- logic
- Math.random() 會會傳 [0..1) 的小數


:::success
:basketball: 3.1.8 副檔名 

輸入一個檔名，輸出副檔名名稱。例如 memberList.txt ⇒ txt
:::
- 字串處理


## 3.2 陣列 

### 練習

:::success
:basketball: 3.2.ex01 解析字串1

`"eng:20;phy:90;math:100"`。請透過 split 先以`;`形成一個陣列，再以 `:`切割，最終形成一個二維陣列。注意數字的部分要轉為整數型態。使用者要求輸入科目名稱，系統輸出此科目的分數
:::
Hint:

```javascript
// 先分割 ; 再分割 : 
str.split(";") 
str.split(":")
```

:::success
:basketball: 3.2.ex02 星期幾

2021/1/1 是星期五，輸入月份和日期（一樣是2021年），輸出是星期幾。請用一個陣列記錄每個月的天數，並應用之。
:::
- logic
- array

:::success
:basketball: 3.2.ex03 成績

有一個二維陣列 grade，儲存 三個人三科的成績（請隨機產生）; 一個一維陣列 names 儲存三個人的姓名; 一個一維陣列儲存三科的名稱。請算出 (1)  各科平均 (2) 每個人的平均 (3) 各科最高分予該學生姓名。
:::
- random generation
- 二維陣列
- 邏輯判斷

:::success
:basketball: 3.2.ex04 溫度 

一個陣列儲存一群溫度，請使用 short function (=>) 做一個攝氏轉華氏溫度的功能，輸出到另一個陣列，並印出。
:::
- function
- array map function

:::success
:basketball: 3.2.ex05 平方和

一個陣列儲存一群數字，透過 forEach() 回傳此平方和。`dis = [12, 13, 14] ⇒ (12**2 + 13**2 + 14**2)`
:::
- forEach, map function


:::success
:basketball: 3.2.ex06 信箱 

輸入一個信箱，輸出是否為合格的信箱。nlhsueh@gmail ⇒ 合格。nlhsueh.gmail.com ⇒ 錯誤。
:::
- 字串處理
- reg expression

## 3.3 物件

### 練習

:::success 
:basketball: 3.3.ex01 解析字串

使用物件陣列儲存三個人的三科成績資料 (math, phy, eng)。透過程式計算出 (1) 各科的平均 (2) 每個人的平均。


:::

:::success
:basketball: 3.3.ex02 過濾人口

使用 array.filter 挑選出人口小於 300 萬的都市

```javascript    
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
```

Hint
- Object
- array filter function

:::


:::success
:basketball: 3.3.ex02 排序人口

同上，使用 filter, sort, map 印出人口小於 300 萬，由人口少到多排序印出 都市名與人口數。
:::

## 3.4 文件物件模型

DOM (Document Object Model)

:::success
:basketball: 3.4.ex01 身分證

設計一個 HTML可以輸入身分證與 email。(1) 當按下 提交 時會檢查身分證是否正確 (2) 切換到 email 時也會檢查身分證。
:::
- onclick(), onchange()
- 字串處理: 身分證第一碼為英文 a-z or A-Z; 第二碼 1 or 2, 其餘為數字


:::success
:basketball: 3.4.ex02 平均與最高的 

設計一個 form 讓我們輸入姓名和三個科目的成績。按下「添增」後欄位會清掉，下方出現剛剛輸入的資料。按下「最高分」會呈現最高分者的資料。按下「平均」會呈現每個人的平均分數。
:::


## 綜合練習

:::success

:basketball: :basketball: :basketball: 3.EX01 BMI Example
* 設計一個介面可以輸入多個人的身高體重。可以點選統計按鈕，依據BMI 正常、過重、過低分類列出人的資訊。可以點選輸入返回輸入介面。

<img src="https://hackmd.io/_uploads/SJKYSr8yC.png" width=400>

<img src="https://hackmd.io/_uploads/SJHiBBL10.png" width=400>


:::



:::success
:basketball: 重複檢查

新增人員體重時，如果名字一樣表示體重的變化，就會呈現出 xxx 的體重由 yyy 變成 zzz; BMI 也從 ppp 變成 qqq 的訊息。
:::

:::success
:basketball: 運動去

擴充上面的應用，新增一個運動的 button, 每次運動後就會減重，重新計算 bmi 後呈現

- (a) 每次運動就會減 0.1kg
- (b) 可以選擇運動，例如瑜伽就減 0.1kg, 打籃球就減 0.2kg
:::

---
#### exam-js-coupon
:::success
:football: 加碼券

一、加碼券開獎 HTML 版 (35%)
如下方加碼券的畫面，請以 HTML/CSS 設計該畫面，並進行以下修改：
* 移除「點一下開獎囉」按鈕，直接呈現獎項內容。
* 標題和獎項內容整體風格置中左右有 margin，獎項條列仍為置左。
* 獎項名稱（如國旅券）的字體稍大，顏色改為藍色。
* 游標移到號碼（例如21) 時，底色會變成黃底。
* （資料如第二題，可取用使用）

二：修改以下的程式碼，點擊後會出現如下的畫面 (35%)

<img src=https://hackmd.io/_uploads/S1ADG2WNp.png width=500>

三、加碼券開獎圖片版 (35%)
* 圖片可由 [這裡](https://drive.google.com/drive/folders/1Gd9Gt1jdhg7e_xUW_ubzoPK42ON7VP-W?usp=sharing) 取得
* 請使用 HTML/CSS 排版以完成下方畫面
* 亦可修改第二題 JS code 完成

<img src=https://hackmd.io/_uploads/B1O90hbVp.png width=500>


```javascript
<!DOCTYPE html>

<head>
<script>
let winNo1 = {
  "domesticTravel": ["21", "32", "98", "67", "97", "410"],
  "iYuan": ["64", "85"],
  "agriculture": ["89", "32", "54", "597", "453", "152"],
  "artFunE": ["96", "15", "07", "30", "73", "98", "19", "11"],
  "artFunP": ["39", "37", "23", "36", "79", "08", "14", "75"],
  "sports": ["97", "13", "19", "55", "71", "93", "381", "734", "644",   "453", "985"],
  "hakka": ["81", "900"],
  "rgionalRevitalization": ["081", "105", "594", "188", "089", "396", "521", "467", "912", "798", "358", "441", "367", "941", "335"]
};

let name_mapping = {
   "domesticTravel": "國旅劵",
   "iYuan": "i 原劵",
   "agriculture": "農遊劵",
   "artFunE": "藝Fun劵 數位",
   "artFunP": "旅遊劵 紙本",
   "sports": "動滋劵",
   "hakka": "客庄劵",
   "rgionalRevitalization": "地方創生劵"
};

function show() {
    let s = "<ul>";




    document.getElementById("#result").innerHTML = s;
}
</script>
</head>

<body>
   <h1> 加碼劵開獎 </h1>
   <input type="button" value="點一下開獎囉" onclick="show()">
   <div id="#result"></div>
</body>
```
:::

Sol-2 Hint
```javascript
function show() {
    let s = "<ul>";
    for (let n in name_mapping) {
        s += "<li>" + name_mapping[n];
        s += ": ";
        s += winNo1[n].join(', ');
        console.log(s);
    }
    s = s + "</ul>";
    document.getElementById("#result").innerHTML = s;
}
```

Sol-1 Hint
```javascript
<!-- add the style -->
<style>
    .prizeName {
        font-size: larger;
        color: blue;
    }

    .prizeNum:hover {
        background-color: yellow;
    }
</style>


// add the class to the element
function show01() {
    let s = "<ul>";

    for (let n in name_mapping) {
        s += '<li><idv class="prizeName">' + name_mapping[n] + '</idv>';
        s += ": ";
        ss = winNo1[n].map((x) => '<idv class="prizeNum">' + x + '</idv>')
        s += ss.join(', ');
        console.log(s);
    }
    s = s + "</ul>";
    document.getElementById("#result01").innerHTML = s;
        }
```

Sol-3: Hint
```javascript
function showAllWinner() {
    let s = "";
    for (let prize in winNo1) {
        s += ... ;
        s += '<div class="logo div">';
        let logo = logo_mapping[prize];
        s += `<img src="img/${logo}" alt="" class="img-fluid">`;
        s += "</div>";

        s += ... ;
        let prize_name = name_mapping[prize];
        let winner = winNo1[prize];
        s += `<p>${prize_name}</p>`;
        let winner_div = winner.map(x => `<div class="winner"> ${x} </div>`);
        s += winner_div.join("");
        s += "</div></div>";
    }

```

---

## 參考解答

[Github](https://github.com/nlhsueh/www-js)

#### grade
```javascript=
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script>
        let a = [
            [98, 95, 98], // 學生 1 的三科成績
            [89, 22, 99], // 學生 2 的三科成績
            [70, 55, 72]  // 學生 3 的三科成績
        ];
        let names = [];
        let subjects = [];

        function setNameSubject() {
            names = document.forms["grade"]["names"].value.split(" ");
            console.log(names);
            subjects = document.forms["grade"]["subjs"].value.split(" ");
            console.log(subjects);
        }

        // 印出各科最高者
        function highest() {
            let st_len = a.length;
            let sj_len = a[0].length;
            let hList = [];
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
                // console.log(subjects[j] + ", " + max.toString() + " by " + names[max_index]);
                hList.push({ 'subject': subjects[j], 'max': max, 'name': names[max_index] });
                console.log(`${subjects[j]}: the highest score is ${max}, by ${names[max_index]}`);
            }
            console.log(hList);
            return (hList);
        }

        // 回傳學生各科的平均
        function average() {
            let st_av = [];
            for (let gg of a) {
                sum = 0;
                for (let g of gg) {
                    sum += g;
                }
                st_av.push(Math.round(sum / gg.length, 2));
            }
            console.log(st_av)
            return st_av;
        }
    </script>
    <style>
        .center {
            max-width: 600px;
            margin: auto;
            width: 60%;
            padding: 10px;
        }

        label,
        input {
            display: block;
        }

        label,
        fieldset {
            margin-bottom: 10px;
        }
    </style>

</head>

<body class="center">

    <h1>Grade system</h1>

    <form name="grade" id="grade" action="">
        <fieldset>
            <label for="names">Names</label>
            <input id="names" name="names" type="text" value="John Nick Albert">
            <label for="subjs"></label>
            <input id="subjs" name="subjs" type="text" value="Math Phy Eng">

            <input type="button" value="Set value" onclick="setNameSubject()">
            <input type="button" value="average" onclick="average()">
            <input type="button" value="highest" onclick="highest()">
        </fieldset>
    </form>

</body>

</html>
```

## 歷屆考題

### 112-1 期中考

#### 一、加碼券開獎 HTML 版 (35%)
* 如下方加碼券的畫面，請以 HTML/CSS 設計該畫面，並進行以下修改：
    * 標題和獎項內容整體風格置中左右有 margin，獎項條列仍為置左。
    * 獎項名稱（如國旅券）的字體稍大，顏色改為藍色。
    * 游標移到號碼（例如 21) 時，底色會變成黃底。
    * 「點一下開獎囉」不用有動作。
    * （資料如第二題，可取用使用）

<img src="https://hackmd.io/_uploads/r14dms8kA.png" width="400">

#### 二、加碼券開獎 JS 版 (35%)
同上，但這次會有動作。修改以下的程式碼，點擊後會出現上面的畫面（獎項名稱和號碼）

```html
<!DOCTYPE html>

<head>
<script>
let winNo1 = {
  "domesticTravel": ["21", "32", "98", "67", "97", "410"],
  "iYuan": ["64", "85"],
  "agriculture": ["89", "32", "54", "597", "453", "152"],
  "artFunE": ["96", "15", "07", "30", "73", "98", "19", "11"],
  "artFunP": ["39", "37", "23", "36", "79", "08", "14", "75"],
  "sports": ["97", "13", "19", "55", "71", "93", "381", "734", "644",   "453", "985"],
  "hakka": ["81", "900"],
  "rgionalRevitalization": ["081", "105", "594", "188", "089", "396", "521", "467", "912", "798", "358", "441", "367", "941", "335"]
};

let name_mapping = {
   "domesticTravel": "國旅劵",
   "iYuan": "i 原劵",
   "agriculture": "農遊劵",
   "artFunE": "藝Fun劵 數位",
   "artFunP": "旅遊劵 紙本",
   "sports": "動滋劵",
   "hakka": "客庄劵",
   "rgionalRevitalization": "地方創生劵"
};

function show() {
    let s = "<ul>";




    document.getElementById("#result").innerHTML = s;
}
</script>

</head>

<body>
   <h1> 加碼劵開獎 </h1>
   <input type="button" value="點一下開獎囉" onclick="show()">
   <div id="#result"></div>
</body>
```

#### 三、加碼券開獎圖片版 (35%)
* 圖片可由 [這裡](https://drive.google.com/drive/folders/1Gd9Gt1jdhg7e_xUW_ubzoPK42ON7VP-W?usp=sharing) 取得
* 請使用 HTML/CSS 排版以完成下方畫面
* 亦可修改第二題 JS code 完成
* (超過 100 分以 100 分計)

<img src="https://hackmd.io/_uploads/rkl-SiUk0.png" width="400">

### 112-2 期中考

#### 一、七龍珠 (35%)

七龍珠是鳥山明所創作、廣受喜愛的日本漫畫。以下是一個簡介網頁 (下方條列與圖中編號對應）
1. 元件置中，寬度設為 700px; 左右留相同大小的間隔。
2. h1 元件，請改為標題置中。
3. 圖片的透明度預設為 0.7, 游標移過去時變為 1.0。
4. p 元件，顏色請改為藍色。
5. 圖片漂浮於右側。
6. 寬度請改為原來的 0.8; 置中綠底白字。高度限定為 100px; 超出的部分請用 scroll 捲軸呈現。
7. 條列元件，請用順序條列。


See [完整考題](https://docs.google.com/document/d/1SfoXPxjsjOnfxrVOzgZ7ouyhyXEwzq8p3CTC22I4yg4/edit#heading=h.tu8h3uvts1wb)

#### 二、人物 (35%)

想要呈現上述的效果，部分程式碼如下：

```javascript
<div class="gallery">
    <img src="http://img.yes-news.com/201502/ffef4eda.jpg">
    <div class="desc">孫悟空-少年期</div>
</div>
```


請參考 CSS 講義，image gallery 的做法，div gallery 的寬與高分別設定為 180px, 220px。各圖片的原始網址與描述如下：

```javascript
characters = ["孫悟空-少年期", "龜仙人", "孫悟飯", "桃白白", "孫悟空-前期", "孫悟空-中期"];
img_urls = ["http://img.yes-news.com/201502/ffef4eda.jpg",
            "http://img.yes-news.com/201502/b9461ecb.jpg",
            "http://img.yes-news.com/201502/c0e2da6f.jpg",
            "http://img.yes-news.com/201502/03b96611.jpg",
            "http://img.yes-news.com/201502/e079dd22.jpg",
            "http://img.yes-news.com/201502/c6812f95.jpg",
            ];
```

See [完整考題](https://docs.google.com/document/d/1SfoXPxjsjOnfxrVOzgZ7ouyhyXEwzq8p3CTC22I4yg4/edit#heading=h.tu8h3uvts1wb)

#### 三、人物- JS 版本 (35%)

同上，但一開始資料是空的，如下 img 的 src 和 desc 都是空的，但有 id：

```html
<div class="gallery">
    <img id="img0" src="">
    <div id="desc0" class="desc"></div>
</div>

<div class="gallery">
    <img id="img1" src="">
    <div id="desc1" class="desc"></div>
</div>
    ...
```    

請透過上述陣列的資料 (characters, img_urls)，動態的產生資料。當我們按下「人物上場」時
* 透過 console.log() 印出兩個陣列的內容
* 透過 document.getElementById() 來做資料的設定，產生和第二題一樣的畫面。

See [完整考題](https://docs.google.com/document/d/1SfoXPxjsjOnfxrVOzgZ7ouyhyXEwzq8p3CTC22I4yg4/edit#heading=h.tu8h3uvts1wb)