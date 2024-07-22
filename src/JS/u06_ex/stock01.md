
## Stock 01 Exercise

### stock01a buy stock

以下表示一個人的買賣紀錄，以及目前的價格。每筆交易用 # 分開，每筆交易可以包涵價格與數量。current_tsmc 表示目前的價格。

```
buy_tsmc = "$200 2000 # $250 2000 # $300 2000";
current_tsmc = 1035;
```

請輸出他的買賣歷程，如：
```
買了 2000 股，價格 200
買了 2000 股，價格 250
買了 2000 股，價格 300
```

學習：
* 字串處理 `split()`, `slice()`
* `for ... of ...` 來瀏覽陣列元素
* `parseInt()` 將字串轉型為 int
* string template 的應用 `${ }`

### stock01b array

宣告 `priceList`, `quantityList` 兩個陣列，延續上一題，在處理的過程中，把價格和數量存到這兩個陣列中

學習
* array 的宣告
* `array.push()`

### stock01c profit

同上，宣告一個 function `showProfit(str_trade, current_price)`, 來處理股票買賣的訊息。
* 依據現價計算預估的獲利金額與獲利率

學習
* function 的宣告與呼叫
* loop 與 total 的應用
* `.toFixed()` 計算小數點
* `.toLocaleString()` 呈現千分號

### stock01d for each

* 上述程式碼改為 `array.forEach` 的方式進行
* 透過 callback function 來處理每一筆交易
* 使用 `map()` 來將陣列中每一個字串轉為整數 (`parseInt`)


### stock01e sell stocks

交易的數量可以是負的，表示賣出

```
const buy_tsmc = "$200 2000 # $250 2000 # $300 -2000";
```

輸出：
```
總成本: 900,000
預估現值: 2,000,000
實際獲利: 150,000
預估獲利: 1,550,000
預估獲利率: 172.22%
```

## Stock 02 Exercise

### stock02a

用物件型態表示一比交易記錄如下：
```
b3 = {
    'name': '台灣大',
    'buy_date': '2003/6/19',
    'price': 80,
    'quantity': 4000,
    'trade': '買',
}
```

請印出白話印出此交易，如 

> 1999/4/20日 以 200元 買 台積電 股票 1000 股

### stock 02b - 成本

同上，請計算出所有的購買成本

### stock 02c - 現值

同上，可能同一支股票會買兩次，請依據所有的交易計算出現有的股票數量。用物件的方式來儲存，如：

> My Asset:  { '台積電': 1200, '鴻海': 2000, '台灣大': 4000 }

再用物件假設每一個股票的現值，然後計算出所有資產的現值。

### stock 02d - class and object

Learn
* 如何用 object 來封裝更複雜的資訊
  * 股票的買賣歷程
  * 現有股票資產數量及其購買價格（方便計算獲利）
  * 現有股票數量（方便計算現有市場價值）
* 如何宣告 class, 如何透過 class 來生成 object
  * 比較 object/class 的差異

### stock 02e - 

Learn
* 


## BMI exercise

