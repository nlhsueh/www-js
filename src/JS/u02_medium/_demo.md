## Demo

### Array

- [array_1D.js](array_1D.js): 
- [array_2D.js](array_2D.js): 
- [array_method.js](array_method.js): flat, slice 等 method
- [array_sort.js](array_sort.js): 有預設的排序，也可以自訂。
- [array_split.js](array_split.js): 字串切割後存到陣列; 和物件作比較。
- [array_filter.js](array_filter.js): 
- [array_for_of.js](array_for_of.js): 

### Iteration
- [iter.js](iter.js): for of, for in 的比較
- [iter_filter.js](iter_filter.js): 透過定義 callback 函式來設計尋找條件
- [iter_reduce.js](iter_reduce.js): 類遞迴

### Object
- [object.js](object.js): 物件屬性的設定與讀取
- [object_array.js](object_array.js): 瀏覽物件的陣列
- [object_class.js](object_class.js): 先宣告類別，在生成物件

### Collection object
- [js_Set.js](js_Set.js): 像數學的集合一樣，不會有重複的元素。
- [js_Map.js](js_Map.js): 會有 key, value



## Exercise

### ex01 解析字串1

`"eng:20;phy:90;math:100"`。請透過 split 先以`;`形成一個陣列，再以 `:`切割，最終形成一個二維陣列。注意數字的部分要轉為整數型態。使用者要求輸入科目名稱，系統輸出此科目的分數

Hint:

```javascript
// 先分割 ; 再分割 : 
str.split(";") 
str.split(":")
```

### ex002 星期幾

2021/1/1 是星期五，輸入月份和日期（一樣是2021年），輸出是星期幾。請用一個陣列記錄每個月的天數，並應用之。

- logic
- array

### ex03 成績

有一個二維陣列 grade，儲存 三個人三科的成績（請隨機產生）; 一個一維陣列 names 儲存三個人的姓名; 一個一維陣列儲存三科的名稱。請算出 (1)  各科平均 (2) 每個人的平均 (3) 各科最高分予該學生姓名。

- random generation
- 二維陣列
- 邏輯判斷

### ex04 溫度 

一個陣列儲存一群溫度，請使用 short function (=>) 做一個攝氏轉華氏溫度的功能，輸出到另一個陣列，並印出。
:::
- function
- array map function

### ex05 平方和

一個陣列儲存一群數字，透過 forEach() 回傳此平方和。`dis = [12, 13, 14] ⇒ (12**2 + 13**2 + 14**2)`

- forEach, map function


### ex06 信箱 

輸入一個信箱，輸出是否為合格的信箱。nlhsueh@gmail ⇒ 合格。nlhsueh.gmail.com ⇒ 錯誤。

- 字串處理
- reg expression

## 物件

### ex01 解析字串

使用物件陣列儲存三個人的三科成績資料 (math, phy, eng)。透過程式計算出 (1) 各科的平均 (2) 每個人的平均。


### ex02 過濾人口

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

### ex02 排序人口

同上，使用 filter, sort, map 印出人口小於 300 萬，由人口少到多排序印出 都市名與人口數。